import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { u as useDialogStore, _ as _sfc_main$6, a as __nuxt_component_4 } from "./DialogFooter-888ecf09.js";
import { _ as __nuxt_component_1, a as _sfc_main$7 } from "./DialogTitle-7c8338b5.js";
import { d as defineStore, s as storeToRefs, _ as _export_sfc, b as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, ref, unref, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, withAsyncContext } from "vue";
import "destr";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import { f as fieldHasError, g as getErrorByField } from "./errors-9a2b81c2.js";
import { TransitionRoot } from "@headlessui/vue";
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
const useCompanyStore = defineStore("companies-store", {
  state: () => ({
    selectedCompany: null
  }),
  actions: {
    setSelectedCompany(payload) {
      console.log(payload);
      this.selectedCompany = payload;
    }
  }
});
const useUpdateCompanyStore = defineStore("update-company-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null,
    actionIsToDisable: false
  }),
  actions: {
    async updateCompany(body, accessToken, companyID) {
      console.log(companyID);
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/company/update", {
          method: "put",
          body: { body, accessToken },
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
        }, "$Bsdp9RHvdq");
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
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UpdateCompany",
  __ssrInlineRender: true,
  setup(__props) {
    useUpdateCompanyStore();
    useDialogStore();
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useUpdateCompanyStore()
    );
    storeToRefs(useAuthStore());
    const { selectedCompany } = storeToRefs(useCompanyStore());
    const company = ref(selectedCompany.value);
    ref("Add Company");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<!--[--><p class="text-red-500 mb-6">${ssrInterpolate(unref(nonFieldErrors))}</p><form class="w-full"><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(company).name)} class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Name")
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Name"))}</p></div><div class="mb-3"><label for="physical-address" class="block text-sm font-semibold leading-6 text-gray-900">Physical Address</label><input type="text" id="physical-address" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "PhysicalAddress"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(company).physical_address)}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "PhysicalAddress"))}</p></div><div class="mb-3"><label for="number-of-mployees" class="block text-sm font-semibold leading-6 text-gray-900">Number of Employees</label><input type="number" id="number-of-employees" disabled class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "NumberOfEmployees"
        )
      }, "appearance-none cursor-not-allowed text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required min="1"${ssrRenderAttr("value", unref(company).number_of_employees)}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "NumberOfEmployees"))}</p></div><div class="mb-3"><label for="max-loan-percent" class="block text-sm font-semibold leading-6 text-gray-900">Max percent of loan amount that can be taken as loan</label><input type="number" id="max-loan-percent" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "MaxLoanPercent"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required${ssrRenderAttr("value", unref(company).max_loan_percent)}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "MaxLoanPercent"))}</p></div><div class="mb-3"><label for="profit-share-percent" class="block text-sm font-semibold leading-6 text-gray-900">Percentage of interest retained by this company</label><input type="number" id="profit-share-percent" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "ProfitSharePercent"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(company).profit_share_percent)}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "ProfitSharePercent"))}</p></div><div class="mb-3"><label for="loan-period" class="block text-sm font-semibold leading-6 text-gray-900">Period employees are allowed to request loan</label> ${ssrInterpolate(unref(company).loan_period)} <input type="range" id="loan-period" min="1" max="28" class="text-slate-900 rounded-md block w-full px-3 h-10 sm:text-sm focus:outline-none placeholder:text-slate-400" aria-required${ssrRenderAttr("value", unref(company).loan_period)}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "LoanPeriod"))}</p></div><div class="mb-3"><label for="approves-loan" class="block text-sm font-semibold leading-6 mb-5 text-gray-900">Should loans be approved?</label><label class="inline-flex relative items-center mr-5 cursor-pointer"><input type="checkbox" id="approves-loan" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(unref(company).approves_loan) ? ssrLooseContain(unref(company).approves_loan, null) : unref(company).approves_loan) ? " checked" : ""} required><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div><div class="text-[#2C7075] ml-3">${ssrInterpolate(unref(company).approves_loan)}</div></label><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "ApprovesLoan"))}</p></div><div class="flex justify-end"><button type="submit" class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Update Company</span>`);
      }
      _push(`</button></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateCompany.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UpdateCompanyDialog",
  __ssrInlineRender: true,
  props: {
    refreshCompanies: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const { showUpdateCompanyDialog } = storeToRefs(useDialogStore());
    const { closeUpdateCompanyDialog } = useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogComponent = _sfc_main$6;
      const _component_DialogHead = __nuxt_component_1;
      const _component_DialogTitle = _sfc_main$7;
      const _component_UpdateCompany = _sfc_main$5;
      const _component_DialogFooter = __nuxt_component_4;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: unref(showUpdateCompanyDialog)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogComponent, { closeFunc: unref(closeUpdateCompanyDialog) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Update Company`);
                      } else {
                        return [
                          createTextVNode("Update Company")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DialogTitle, null, null, _parent3, _scopeId2));
                  _push3(`<div class="w-full p-4 space-y-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UpdateCompany, null, null, _parent3, _scopeId2));
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
                        createTextVNode("Update Company")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DialogTitle),
                    createVNode("div", { class: "w-full p-4 space-y-3" }, [
                      createVNode(_component_UpdateCompany)
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
              createVNode(_component_DialogComponent, { closeFunc: unref(closeUpdateCompanyDialog) }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Update Company")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DialogTitle),
                  createVNode("div", { class: "w-full p-4 space-y-3" }, [
                    createVNode(_component_UpdateCompany)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateCompanyDialog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useDisableCompanyStore = defineStore("disable-company-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null
  }),
  actions: {
    async disableCompany(body, accessToken) {
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/company/disable", {
          method: "put",
          body: { body, accessToken },
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
        }, "$qzRAnUYHry");
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DisableCompany",
  __ssrInlineRender: true,
  setup(__props) {
    storeToRefs(useUpdateCompanyStore());
    useDisableCompanyStore();
    useDialogStore();
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useDisableCompanyStore()
    );
    storeToRefs(useAuthStore());
    const { selectedCompany } = storeToRefs(useCompanyStore());
    ref(selectedCompany.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto" }, _attrs))}><p class="text-xl flex justify-center">Are you sure!</p><div class="flex justify-end"><button class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DisableCompany.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DisableCompanyDialog",
  __ssrInlineRender: true,
  props: {
    refreshCompanies: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const { showDisableCompanyDialog } = storeToRefs(useDialogStore());
    const { closeDisableCompanyDialog } = useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogComponent = _sfc_main$6;
      const _component_DialogHead = __nuxt_component_1;
      const _component_DialogTitle = _sfc_main$7;
      const _component_DisableCompany = _sfc_main$3;
      const _component_DialogFooter = __nuxt_component_4;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: unref(showDisableCompanyDialog)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogComponent, { closeFunc: unref(closeDisableCompanyDialog) }, {
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
                  _push3(ssrRenderComponent(_component_DisableCompany, null, null, _parent3, _scopeId2));
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
                      createVNode(_component_DisableCompany)
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
              createVNode(_component_DialogComponent, { closeFunc: unref(closeDisableCompanyDialog) }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Update Status")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DialogTitle),
                  createVNode("div", { class: "w-full p-4 space-y-3" }, [
                    createVNode(_component_DisableCompany)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DisableCompanyDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheCompanies",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref("YYYY-MM-DD h:mm:ss");
    useDialogStore();
    useDialogStore();
    useCompanyStore();
    useUpdateCompanyStore();
    const { user } = storeToRefs(useAuthStore());
    const pageSize = ref(10);
    const pageID = ref(1);
    const searchValue = ref();
    ref();
    const { data: companies, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/company/list", {
      query: {
        pageSize: pageSize.value,
        pageID: pageID.value,
        accessToken: user.value.refresh_token
      }
    }, "$4bbEUgJDPt")), __temp = await __temp, __restore(), __temp);
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
      const _component_UpdateCompanyDialog = _sfc_main$4;
      const _component_DisableCompanyDialog = _sfc_main$2;
      _push(`<!--[--><div class="flex justify-start text-xl"> Companies </div><br><div class="flex justify-end"><form class="mb-3 w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search companies.." required${ssrRenderAttr("value", unref(searchValue))}><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form></div><br>`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_Spin, { class: "h-20 w-20 text-teal-700" }, null, _parent));
      } else {
        _push(`<div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">Company Name</th><th scope="col" class="py-3 px-6">Address</th><th scope="col" class="py-3 px-6">Employees</th><th scope="col" class="py-3 px-6">Profit Share</th><th scope="col" class="py-3 px-6">Max.Loan.Percent</th><th scope="col" class="py-3 px-6">Loan.Period</th><th scope="col" class="py-3 px-6">Approve.Loans</th><th scope="col" class="py-3 px-6">Status</th><th scope="col" class="py-3 px-6">Created.At</th><th scope="col" class="py-3 px-6">Edit</th><th scope="col" class="py-3 px-6">Enable/Disable</th></tr></thead><tbody class="divide-y"><!--[-->`);
        ssrRenderList(unref(companies), (company, index2) => {
          _push(`<tr class="${ssrRenderClass([{ "bg-gray-50": index2 % 2 === 1 }, "bg-white border-b divide-x hover:bg-teal-100 cursor-pointer"])}"><td class="py-4 px-6">${ssrInterpolate(company.id)}</td><td class="py-4 px-6">${ssrInterpolate(company.name)}</td><td class="py-4 px-6">${ssrInterpolate(company.physical_address)}</td><td class="py-4 px-6">${ssrInterpolate(company.number_of_employees)}</td><td class="py-4 px-6">${ssrInterpolate(company.profit_share_percent)}</td><td class="py-4 px-6">${ssrInterpolate(company.max_loan_percent)}</td><td class="py-4 px-6">${ssrInterpolate(company.loan_period)}</td><td class="py-4 px-6">${ssrInterpolate(company.approves_loan)}</td><td class="py-4 px-6">`);
          if (company.status === 0) {
            _push(`<label> Not Active </label>`);
          } else {
            _push(`<!---->`);
          }
          if (company.status === 1) {
            _push(`<label> Active </label>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-4 px-6">${ssrInterpolate(formatDate(company.created_at))}</td><td class="py-4 px-6"><span class="cursor-pointer font-medium text-teal-700 hover:underline">Edit</span></td><td class="py-4 px-6"><label class="inline-flex relative items-center mr-5 cursor-pointer"><input type="checkbox" value="" class="sr-only peer"${ssrIncludeBooleanAttr(isChecked(company.status)) ? " checked" : ""}><div class="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div></label></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(ssrRenderComponent(_component_UpdateCompanyDialog, { "refresh-companies": unref(refresh) }, null, _parent));
      _push(`<div class="w-1/2">`);
      _push(ssrRenderComponent(_component_DisableCompanyDialog, { "refresh-companies": unref(refresh) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheCompanies.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheCompanies = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_PlusButton = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheCompanies, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/companies/add" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-135b9f6d.js.map
