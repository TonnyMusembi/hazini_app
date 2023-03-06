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
  _push(`<!--[--><div class="flex justify-start text-xl"> Revenue Share </div><br><div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="py-3 px-6">Company Name</th><th scope="col" class="py-3 px-6">Loans</th><th scope="col" class="py-3 px-6">Principal</th><th scope="col" class="py-3 px-6">Total</th><th scope="col" class="py-3 px-6">Amount Paid</th><th scope="col" class="py-3 px-6">Total Profit</th><th scope="col" class="py-3 px-6">Hazini Profit</th><th scope="col" class="py-3 px-6">Partner Profit</th></tr></thead><tbody class="divide-y"><tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"><td class="py-4 px-6"></td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td><td class="py-4 px-6">test</td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheRevenues.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheRevenues = __nuxt_component_0;
  _push(ssrRenderComponent(_component_TheRevenues, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Revenues.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Revenues = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Revenues as default
};
//# sourceMappingURL=Revenues-76804d5f.js.map
