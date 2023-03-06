import { _ as _export_sfc, b as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><div class="flex justify-start text-xl"> Loans </div><br><div class="flex justify-end">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "loan-products/add",
    class: "inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Add`);
      } else {
        return [
          createTextVNode(" Add")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br><div class="overflow-x-auto relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">Phone Number</th><th scope="col" class="py-3 px-6">Employee Name</th><th scope="col" class="py-3 px-6">Principal</th><th scope="col" class="py-3 px-6">Interest</th><th scope="col" class="py-3 px-6">Total Amount</th><th scope="col" class="py-3 px-6">Paid Amount</th><th scope="col" class="py-3 px-6">Due Amount</th><th scope="col" class="py-3 px-6">Penalty</th><th scope="col" class="py-3 px-6">Insatlments</th><th scope="col" class="py-3 px-6">Days</th><th scope="col" class="py-3 px-6">Loan Status</th><th scope="col" class="py-3 px-6">Started At</th><th scope="col" class="py-3 px-6">Due When</th><th scope="col" class="py-3 px-6">Approve</th></tr></thead><tbody class="divide-y"><tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"><td class="py-4 px-6">1</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6">branch</td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Edit</a></td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Diactivate</a></td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLoans.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheLoans = __nuxt_component_0;
  _push(ssrRenderComponent(_component_TheLoans, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Loans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Loans = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Loans as default
};
//# sourceMappingURL=Loans-8629f964.js.map
