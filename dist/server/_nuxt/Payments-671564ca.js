import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
  _push(`<!--[--><div class="flex justify-start text-xl"> Payments </div><br><div class="flex justify-end"><form class="mb-3 w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search loans.." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form></div><br><div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">Transaction Id</th><th scope="col" class="py-3 px-6">Amount</th><th scope="col" class="py-3 px-6">Payer Phone Number</th><th scope="col" class="py-3 px-6">Payer Name</th><th scope="col" class="py-3 px-6">Channel </th><th scope="col" class="py-3 px-6">Paid At </th></tr></thead><tbody class="divide-y"><tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"><td class="py-4 px-6"></td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePayments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ThePayments = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ThePayments, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Payments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Payments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Payments as default
};
//# sourceMappingURL=Payments-671564ca.js.map
