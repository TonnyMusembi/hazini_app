import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow overflow-scroll border-b border-gray-200 sm:rounded-lg" }, _attrs))}><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Description </th><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Value </th><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Created At </th><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Updated At </th><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Edit </th><th scope="col" class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"> Delete </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap"><div class="items-center"><div class="ml-4"><div class="text-sm font-medium text-gray-900">1</div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">fhhfgh</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">fhhfgh</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">jhdfhfj</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">jhdfhfj</div></td><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">jhdfhfj</div></td></tr></tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheConfigurations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheConfigurations = __nuxt_component_0;
  _push(ssrRenderComponent(_component_TheConfigurations, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Configurations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Configurations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Configurations as default
};
//# sourceMappingURL=Configurations-d753b291.js.map
