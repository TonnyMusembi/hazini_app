import { u as useNuxtApp, c as createError, a as useRequestFetch, d as defineStore } from "../server.mjs";
import { ref, getCurrentInstance, onServerPrefetch, unref, computed, reactive } from "vue";
import { hash } from "ohash";
import "destr";
const getDefault = () => null;
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? ((_a = options.default) == null ? void 0 : _a.call(options)) ?? null),
      pending: ref(!hasCachedData()),
      error: ref(nuxt.payload._errors[key] ? createError(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(((_a2 = options.default) == null ? void 0 : _a2.call(options)) ?? null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch || []
    ]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
let user1 = {
  access_token: "",
  access_token_expires_at: "",
  refresh_token: "",
  refresh_token_expires_at: "",
  session_id: "",
  user: {
    created_at: "",
    full_name: "",
    password_changed_at: "",
    phone_number: "",
    updated_at: ""
  }
};
const useAuthStore = defineStore("auth-store", {
  state: () => ({
    viewToDisplay: "LOGIN",
    pending: false,
    error: "",
    user: {},
    responseOK: false
  }),
  actions: {
    setViewToDisplay(view) {
      this.viewToDisplay = view;
    },
    async login(body) {
      try {
        this.pending = true;
        let error = "";
        this.error = error;
        let responseOK = false;
        let user = user1;
        const { data } = await useFetch("/api/auth/login", {
          method: "post",
          body,
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
              user = response._data;
            }
          },
          async onResponseError({ request, response, options }) {
            if (response.status === 401 || response.status == 400) {
              error = "Invalid username or password";
            }
            if (response.status === 404) {
              error = "User does not exist in our records";
            }
            if (response.status === 500) {
              error = "Internal server error. Contact admin";
            }
          }
        }, "$ktYhCfunfI");
        this.pending = false;
        this.error = error;
        this.user = user;
        this.responseOK = responseOK;
      } catch (error) {
        this.pending = false;
      }
    },
    logout() {
      this.user = user1;
    }
  },
  persist: true
});
export {
  useFetch as a,
  useAuthStore as u
};
//# sourceMappingURL=login-5863c907.js.map
