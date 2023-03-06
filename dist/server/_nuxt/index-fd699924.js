import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { s as storeToRefs, d as defineStore } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "buffer";
import { f as fieldHasError, g as getErrorByField } from "./errors-9a2b81c2.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "defu";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheLogin",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const { pending, error, responseOK } = storeToRefs(useAuthStore());
    const username = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}><div class="mb-6"><label for="username" class="block text-sm font-semibold leading-6 text-gray-900">Username</label><input type="text" placeholder="user@xyz.com" name="username" id="username" class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200" required${ssrRenderAttr("value", unref(username))}></div><div class="mb-6"><label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label><input type="password" name="password" placeholder="XXXXXXX" id="password" class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200" aria-required required${ssrRenderAttr("value", unref(password))} minlength="6"></div><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(error))}</p><button type="submit" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-500 w-full">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_Spin, null, null, _parent));
      } else {
        _push(`<span>Sign in to account</span>`);
      }
      _push(`</button><p class="mt-6 text-center"><a href="/resetpassword" class="text-sm hover:underline">Forgot password?</a></p></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useCreateUserStore = defineStore("create-user-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null
  }),
  actions: {
    async createUser(body) {
      try {
        this.pending = true;
        let fieldErrors = null;
        let nonFieldErrors = "";
        this.fieldErrors = fieldErrors;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/users/create", {
          method: "post",
          body,
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
            }
          },
          async onResponseError({ request, response, options }) {
            var _a;
            if (response.status == 400) {
              fieldErrors = (_a = response._data) == null ? void 0 : _a.data.errors;
            }
            if (response.status == 401) {
              nonFieldErrors = "Unauthorised";
            }
            if (response.status === 403) {
              nonFieldErrors = "Forbidden";
            }
            if (response.status === 500) {
              nonFieldErrors = "Internal Error";
            }
          }
        }, "$zEZbZD0Asa");
        this.pending = false;
        this.fieldErrors = fieldErrors;
        this.nonFieldErrors = nonFieldErrors;
        this.responseOK = responseOK;
      } catch (err) {
        this.pending = false;
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheRegister",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useCreateUserStore();
    const errors = ref();
    ref(false);
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useCreateUserStore()
    );
    const fullNames = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const username = ref("");
    const kraPin = ref("");
    const iDNumber = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}><div class="mb-6"><input type="text" name="full_names" id="full_names" placeholder="Full Names" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "FullNames")
      }, "mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"])}" required${ssrRenderAttr("value", unref(fullNames))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "FullNames"))}</p></div><div class="mb-6"><input type="text" name="username" id="username" placeholder="Email" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Username")
      }, "mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"])}" required${ssrRenderAttr("value", unref(username))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Username"))}</p></div><div class="mb-6"><div class="rounded-md w-full h-10 bg-gray-200 sm:text-sm flex border"><div class="flex text-center h-full items-center justify-center pl-2 pr-1"> +254 </div><input type="tel" placeholder="Mobile Number" name="phone" pattern="[1-9]{1}[0-9]{1}[0-9]{3}[0-9]{4}" id="phone" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "PhoneNumber")
      }, "appearance-none px-1 text-slate-900 w-full h-full rounded-r-md bg-white block focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A]"])}" required${ssrRenderAttr("value", unref(phoneNumber))}></div><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "PhoneNumber"))}</p></div><div class="mb-6"><div class="flex space-x-3"><input type="text" name="national_id" id="national_id" placeholder="National ID Number" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "NationalID")
      }, "mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"])}"${ssrRenderAttr("value", unref(iDNumber))} required><input type="text" name="kra_pin" id="kra_pin" placeholder="KRA Pin" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "KraPin")
      }, "mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"])}"${ssrRenderAttr("value", unref(kraPin))} required></div><p class="text-red-500 text-sm mt-2">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "KraPin"))}</p><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "NationalID"))}</p></div><div class="mb-6"><input type="password" name="password" id="password" placeholder="Password" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Password")
      }, "mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"])}" aria-required required${ssrRenderAttr("value", unref(password))} minlength="6"><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Password"))}</p></div>`);
      if (unref(nonFieldErrors)) {
        _push(`<p class="text-red-500 mb-6">${ssrInterpolate(unref(nonFieldErrors))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p>${ssrInterpolate(unref(errors))}</p><button type="submit" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-700 w-full">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_Spin, null, null, _parent));
      } else {
        _push(`<span>Sign in to account</span>`);
      }
      _push(`</button></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheRegister.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewToDisplay } = storeToRefs(useAuthStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheLogin = _sfc_main$2;
      const _component_TheRegister = _sfc_main$1;
      _push(`<!--[-->`);
      if (unref(viewToDisplay) === "LOGIN") {
        _push(ssrRenderComponent(_component_TheLogin, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(viewToDisplay) === "REGISTER") {
        _push(ssrRenderComponent(_component_TheRegister, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-fd699924.js.map
