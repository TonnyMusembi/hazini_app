import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { u as useDialogStore, _ as _sfc_main$4, a as __nuxt_component_4 } from "./DialogFooter-888ecf09.js";
import { _ as __nuxt_component_1, a as _sfc_main$5 } from "./DialogTitle-7c8338b5.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, withAsyncContext } from "vue";
import { d as defineStore, s as storeToRefs, _ as _export_sfc, b as __nuxt_component_0$1 } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import { u as useUserStore } from "./user-3e02bedf.js";
import { TransitionRoot } from "@headlessui/vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";
import { _ as __nuxt_component_2 } from "./PlusButton-ca8a1048.js";
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
const useDisableUserStore = defineStore("disable-user-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null,
    actionIsToDisable: false,
    refreshFunction: null
  }),
  actions: {
    async disableUser(accessToken, status, userID) {
      console.log(status);
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/users/disable", {
          method: "put",
          body: { accessToken, status, userID },
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
            }
          },
          async onResponseError({ request, response, options }) {
            var _a, _b, _c;
            if (response.status == 400) {
              fieldErrors = (_a = response._data) == null ? void 0 : _a.data.errors;
            }
            if (response.status == 401) {
              nonFieldErrors = "Unauthorised";
            }
            if (response.status === 403) {
              nonFieldErrors = (_b = response._data) == null ? void 0 : _b.data.error;
            }
            if (response.status === 404) {
              nonFieldErrors = (_c = response._data) == null ? void 0 : _c.data.error;
            }
            if (response.status === 500) {
              nonFieldErrors = "Internal Error";
            }
          }
        }, "$XFskEaHEQm");
        this.pending = false;
        this.fieldErrors = fieldErrors;
        this.nonFieldErrors = nonFieldErrors;
        this.responseOK = responseOK;
      } catch (err) {
        this.pending = false;
      }
    },
    setDisableAction(payload) {
      this.actionIsToDisable = payload;
    },
    setRefreshFunction(payload) {
      this.refreshFunction = payload;
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DisableUser",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    useDisableUserStore();
    useDialogStore();
    storeToRefs(useDisableUserStore());
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useDisableUserStore()
    );
    storeToRefs(useAuthStore());
    const { selectedUser } = storeToRefs(useUserStore());
    ref(selectedUser.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto" }, _attrs))}><p class="flex justify-center items-center">Are you sure!</p><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(fieldErrors))}</p><div class="flex justify-end"><button class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Confirm</span>`);
      }
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DisableUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DisableUserDialog",
  __ssrInlineRender: true,
  props: {
    refreshUsers: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const { showDisableUserDialog } = storeToRefs(useDialogStore());
    const { closeDisableUserDialog } = useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogComponent = _sfc_main$4;
      const _component_DialogHead = __nuxt_component_1;
      const _component_DialogTitle = _sfc_main$5;
      const _component_DisableUser = _sfc_main$3;
      const _component_DialogFooter = __nuxt_component_4;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: unref(showDisableUserDialog)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogComponent, { closeFunc: unref(closeDisableUserDialog) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Update Status`);
                      } else {
                        return [
                          createTextVNode("Update Status")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DialogTitle, null, null, _parent3, _scopeId2));
                  _push3(`<div class="w-full p-4 space-y-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_DisableUser, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-sm text-gray-600"${_scopeId3}></p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-sm text-gray-600" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Update Status")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DialogTitle),
                    createVNode("div", { class: "w-full p-4 space-y-3" }, [
                      createVNode(_component_DisableUser)
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm text-gray-600" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogComponent, { closeFunc: unref(closeDisableUserDialog) }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Update Status")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DialogTitle),
                  createVNode("div", { class: "w-full p-4 space-y-3" }, [
                    createVNode(_component_DisableUser)
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-sm text-gray-600" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["closeFunc"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DisableUserDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheUsers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref("MM/DD/YYYY");
    const searchValue = ref();
    const { user } = storeToRefs(useAuthStore());
    useDialogStore();
    useDisableUserStore();
    useUserStore();
    ref();
    const pageSize = ref(10);
    const pageID = ref(1);
    const {
      data: users,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/list", {
      query: {
        pageSize: pageSize.value,
        pageID: pageID.value,
        accessToken: user.value.refresh_token
      }
    }, "$pceMPOiS8C")), __temp = await __temp, __restore(), __temp);
    refresh();
    function formatDate(date) {
      var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
      if (month.length < 2)
        month = "0" + month;
      if (day.length < 2)
        day = "0" + day;
      return [day, month, year].join("-");
    }
    const isChecked = (status) => {
      if (status === 1) {
        return true;
      }
      if (status === 0) {
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      const _component_DisableUserDialog = _sfc_main$2;
      _push(`<!--[--><div class="flex justify-start"> Users </div><div class="flex justify-end"><form class="mb-3 w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search users..."${ssrRenderAttr("value", unref(searchValue))} required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form></div><br>`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_Spin, { class: "h-20 w-20 text-teal-700" }, null, _parent));
      } else {
        _push(`<div class="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg"><div class="overflow-auto h-[35rem] relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">User name</th><th scope="col" class="py-3 px-6">Phone Number</th><th scope="col" class="py-3 px-6">ID number</th><th scope="col" class="py-3 px-6">Salary</th><th scope="col" class="py-3 px-6">Loan</th><th scope="col" class="py-3 px-6">Balance</th><th scope="col" class="py-3 px-6">Company</th><th scope="col" class="py-3 px-6">Branch</th><th scope="col" class="py-3 px-6">Assignment</th><th scope="col" class="py-3 px-6">Status</th><th scope="col" class="py-3 px-6">Created at</th><th scope="col" class="py-3 px-6">Enable/Disable</th><th scope="col" class="py-3 px-6">Details</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(users), (user2, index2) => {
          _push(`<tr class="${ssrRenderClass([{ "bg-gray-50": index2 % 2 === 1 }, "bg-white border-b divide-x hover:bg-teal-100 cursor-pointer"])}"><th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">${ssrInterpolate(index2 + 1)}</th><td class="py-4 px-6">${ssrInterpolate(user2.full_names)}</td><td class="py-4 px-6">${ssrInterpolate(user2.phone_number)}</td><td class="py-4 px-6">${ssrInterpolate(user2.national_id_number.String)}</td><td class="py-4 px-6">${ssrInterpolate(user2.net_salary)}</td><td class="py-4 px-6">${ssrInterpolate(user2.loan_amount)}</td><td class="py-4 px-6">${ssrInterpolate(user2.balance)}</td><td class="py-4 px-6">${ssrInterpolate(user2.company_name)}</td><td class="py-4 px-6">${ssrInterpolate(user2.branch_name)}</td><td class="py-4 px-6">${ssrInterpolate(user2.assignment)}</td><td class="py-4 px-6 text-sm">`);
          if (user2.user_status === 0) {
            _push(`<label> Not Active </label>`);
          } else {
            _push(`<!---->`);
          }
          if (user2.user_status === 1) {
            _push(`<label> Active </label>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-4 px-6">${ssrInterpolate(formatDate(user2.created_at))}</td><td class="py-4 px-6"><label class="inline-flex relative items-center mr-5 cursor-pointer"><input type="checkbox" value="" class="sr-only peer"${ssrIncludeBooleanAttr(isChecked(user2.user_status)) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div></label></td><td class="py-4 px-6 cursor-pointer">`);
          _push(ssrRenderComponent(unref(EllipsisHorizontalIcon), { class: "text-teal-700 h-6 w-6" }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      }
      _push(ssrRenderComponent(_component_DisableUserDialog, { "refresh-users": unref(refresh) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheUsers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheUsers = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_PlusButton = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheUsers, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/users/addbulk" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PlusButton, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PlusButton)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-154f8a56.js.map
