import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer hover:bg-teal-500 hover:h-14 hover:w-14 hover:border-separate hover:border-gray-600 rounded-full absolute bottom-5 right-5 z-50 flex justify-center text-white items-center bg-teal-900 h-12 w-12 p-5 shadow-xl" }, _attrs))}> + </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PlusButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=PlusButton-ca8a1048.js.map
