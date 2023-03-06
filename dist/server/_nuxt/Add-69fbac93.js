import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
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
const useCreateCompanyStore = defineStore("create-company-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null
  }),
  actions: {
    async createCompany(body, accessToken) {
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/company/create", {
          method: "post",
          body: { body, accessToken },
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
            }
          },
          async onResponseError({ request, response, options }) {
            var _a, _b;
            if (response.status == 400) {
              fieldErrors = (_a = response._data) == null ? void 0 : _a.data.errors;
            }
            if (response.status == 401) {
              nonFieldErrors = "Unauthorised";
            }
            if (response.status === 403) {
              nonFieldErrors = (_b = response._data) == null ? void 0 : _b.data.error;
            }
            if (response.status === 500) {
              nonFieldErrors = "Internal Error";
            }
          }
        }, "$4jnnDIvr5l");
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
  __name: "AddCompany",
  __ssrInlineRender: true,
  setup(__props) {
    useCreateCompanyStore();
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useCreateCompanyStore()
    );
    storeToRefs(useAuthStore());
    const name = ref("");
    const physicalAddress = ref("");
    const maxLoanPercent = ref(0);
    const numberOfEmployees = ref(0);
    const loanPeriod = ref("");
    const approvesLoan = ref(false);
    ref(1);
    const profitSharePercent = ref(0);
    ref("Add Company");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md p-3 bg-white" }, _attrs))}><p class="text-red-500 mb-6">${ssrInterpolate(unref(nonFieldErrors))}</p><form class="w-full"><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Name")
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Name"))}</p></div><div class="mb-3"><label for="physical-address" class="block text-sm font-semibold leading-6 text-gray-900">Physical Address</label><input type="text" id="physical-address" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "PhysicalAddress"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(physicalAddress))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "PhysicalAddress"))}</p></div><div class="mb-3"><label for="number-of-employees" class="block text-sm font-semibold leading-6 text-gray-900">Number of Employees</label><input type="number" id="number-of-employees" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "NumberOfEmployees"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required min="1"${ssrRenderAttr("value", unref(numberOfEmployees))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "NumberOfEmployees"))}</p></div><div class="mb-3"><label for="max-loan-percent" class="block text-sm font-semibold leading-6 text-gray-900">Max percent of loan amount that can be taken as loan</label><input type="number" id="max-loan-percent" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "MaxLoanPercent"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required${ssrRenderAttr("value", unref(maxLoanPercent))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "MaxLoanPercent"))}</p></div><div class="mb-3"><label for="profit-share-percent" class="block text-sm font-semibold leading-6 text-gray-900">Percentage of interest retained by this company</label><input type="number" id="profit-share-percent" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "ProfitSharePercent"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(profitSharePercent))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "ProfitSharePercent"))}</p></div><div class="mb-3"><label for="loan-period" class="block text-sm font-semibold leading-6 text-gray-900">Period employees are allowed to request loan</label> ${ssrInterpolate(unref(loanPeriod))} <input type="range" id="loan-period" min="1" max="28" class="text-slate-900 rounded-md block w-full px-3 h-10 sm:text-sm focus:outline-none placeholder:text-slate-400" aria-required${ssrRenderAttr("value", unref(loanPeriod))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "LoanPeriod"))}</p></div><div class="mb-3"><label for="approves-loan" class="block text-sm font-semibold leading-6 mb-5 text-gray-900">Should loans be approved?</label><label class="inline-flex relative items-center mr-5 cursor-pointer"><input type="checkbox" id="approves-loan" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(unref(approvesLoan)) ? ssrLooseContain(unref(approvesLoan), null) : unref(approvesLoan)) ? " checked" : ""} required><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div><div class="text-[#2C7075] ml-3">${ssrInterpolate(unref(approvesLoan))}</div></label><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "ApprovesLoan"))}</p></div><button type="submit" class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Add Company</span>`);
      }
      _push(`</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddCompany.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AddCompany = _sfc_main$1;
  _push(ssrRenderComponent(_component_AddCompany, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companies/Add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Add as default
};
//# sourceMappingURL=Add-69fbac93.js.map
