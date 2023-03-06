import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, mergeProps, unref, useSSRContext } from "vue";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const useCreateLoanProductStore = defineStore("create-Loan-product-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null
  }),
  actions: {
    async createLoanProduct(body, accessToken) {
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/loan-products/create", {
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
        }, "$nIKU1pKTmB");
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
  __name: "AddLoanProduct",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCreateLoanProductStore();
    const { pending, nonFieldErrors, fieldErrors, responseOK } = storeToRefs(
      useCreateLoanProductStore()
    );
    const { user } = storeToRefs(useAuthStore());
    const {
      data: companies,
      pending: fetchingCompanyIsPending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/company/list", {
      query: {
        pageSize: 10,
        pageID: 1,
        accessToken: user.value.refresh_token
      }
    }, "$NDwUJuRnWj")), __temp = await __temp, __restore(), __temp);
    const name = ref("");
    const interest = ref();
    const duration = ref();
    const installments = ref();
    const maximumPrincipal = ref();
    const maximumInterest = ref();
    const waiver = ref();
    const transactionCost = ref();
    ref();
    ref();
    ref("Add Company");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md p-5 bg-white h-[40rem] overflow-scroll" }, _attrs))}><p class="text-red-500 mb-6">${ssrInterpolate(unref(nonFieldErrors))}</p><form class="w-full"><div class="mb-3"><label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Select Company</label><select id="company" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "CompanyID"
        )
      }, "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"])}"><!--[-->`);
      ssrRenderList(unref(companies), (company) => {
        _push(`<option${ssrRenderAttr("value", company.id)}>${ssrInterpolate(company.name)}</option>`);
      });
      _push(`<!--]--></select><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "CompanyID"))}</p></div><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Name")
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Name"))}</p></div><div class="mb-3"><label for="interest" class="block text-sm font-semibold leading-6 text-gray-900">Interest</label><input type="number" step="0.01" id="interest" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "Interest"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(interest))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Interest"))}</p></div><div class="mb-3"><label for="duration" class="block text-sm font-semibold leading-6 text-gray-900">Duration In days</label><input type="number" id="duration" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "Duration"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required min="60"${ssrRenderAttr("value", unref(duration))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Duration"))}</p></div><div class="mb-3"><label for="installments" class="block text-sm font-semibold leading-6 text-gray-900">Installments</label><input type="number" id="installments" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "Installments"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required${ssrRenderAttr("value", unref(installments))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Installments"))}</p></div><div class="mb-3"><label for="maximum-principal" class="block text-sm font-semibold leading-6 text-gray-900">MaximumPrincipal</label><input type="number" id="maximum-principal" min="500" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "MaximumPrincipal"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(maximumPrincipal))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "MaximumPrincipal"))}</p></div><div class="mb-3"><label for="maximum-interest" class="block text-sm font-semibold leading-6 text-gray-900">MaximumInterest</label><input type="number" id="maximum-interest" step="0.01" min=".4" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "MaximumInterest"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(maximumInterest))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "MaximumInterest"))}</p></div><div class="mb-3"><label for="waiver" class="block text-sm font-semibold leading-6 text-gray-900">Waiver</label><input type="number" id="waiver" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "Waiver"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(waiver))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Waiver"))}</p></div><div class="mb-3"><label for="transaction-cost" class="block text-sm font-semibold leading-6 text-gray-900">Transaction Cost</label><input type="number" id="transaction-cost" step="0.01" min="0" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "TransactionCost"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(transactionCost))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "TransactionCost"))}</p></div><button type="submit" class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Add Loan Product</span>`);
      }
      _push(`</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddLoanProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AddLoanProduct = _sfc_main$1;
  _push(ssrRenderComponent(_component_AddLoanProduct, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loan-products/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  add as default
};
//# sourceMappingURL=add-e23b5ce3.js.map
