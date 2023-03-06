import { s as storeToRefs, b as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { useSSRContext, ref, withAsyncContext, withCtx, createTextVNode, unref } from "vue";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "destr";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main$1 = {
  __name: "TheLoanProducts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { user } = storeToRefs(useAuthStore());
    const pageSize = ref(10);
    const pageID = ref(1);
    const {
      data: loanProducts,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/loan-products/list", {
      query: {
        pageSize: pageSize.value,
        pageID: pageID.value,
        accessToken: user.value.refresh_token
      }
    }, "$2bePNHFJ25")), __temp = await __temp, __restore(), __temp);
    refresh();
    console.log(loanProducts.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "loan-products/add",
        class: "inline-flex rounded-lg text-sm font-semibold py-1 px-2 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add LoanProduct`);
          } else {
            return [
              createTextVNode(" Add LoanProduct")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br><div class="flex justify-end"><form class="mb-3 w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search companies.." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form></div><br><div class="overflow-x-auto relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">Name</th><th scope="col" class="py-3 px-6">Interest</th><th scope="col" class="py-3 px-6">Max.Pricipal</th><th scope="col" class="py-3 px-6">Installments</th><th scope="col" class="py-3 px-6">Transaction Cost</th><th scope="col" class="py-3 px-6">Company</th><th scope="col" class="py-3 px-6">Waiver</th><th scope="col" class="py-3 px-6">Duration</th><th scope="col" class="py-3 px-6">Status</th><th scope="col" class="py-3 px-6">Edit</th><th scope="col" class="py-3 px-6">Disable</th></tr></thead><tbody class="divide-y"><!--[-->`);
      ssrRenderList(unref(loanProducts), (loanProduct, index2) => {
        _push(`<tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"><td class="py-4 px-6">1</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.name)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.interest)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.maximum_pricipal)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.installments)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.transaction_cost)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.company_name)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.waiver)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.duration)}</td><td class="py-4 px-6">${ssrInterpolate(loanProduct.status)}</td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Edit</a></td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Diactivate</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLoanProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheLoanProducts = _sfc_main$1;
  _push(ssrRenderComponent(_component_TheLoanProducts, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loan-products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-da386740.js.map
