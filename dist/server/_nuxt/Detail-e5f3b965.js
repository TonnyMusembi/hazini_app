import { u as useUserStore } from "./user-3e02bedf.js";
import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useAuthStore } from "./login-5863c907.js";
import { s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import "destr";
import "ohash";
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
import "pinia-plugin-persistedstate";
import "defu";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheDetail",
  __ssrInlineRender: true,
  setup(__props) {
    storeToRefs(useAuthStore());
    const { selectedUser } = storeToRefs(useUserStore());
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container shadow-lg rounded-lg py-4 bg-teal-600"><div class="h-10 w-10 flex justify-center items-center rounded-full mx-auto bg-teal-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-teal-700"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></div><div class="mt-1 flex justify-center text-white">${ssrInterpolate(unref(selectedUser).full_names)}</div></div><div class="flex justify-center shadow-lg rounded-md"><ul role="list" class="py-2 divide-y divide-gray-500"><li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-6 min-w-0"><p class="text-sm font-medium text-gray-900 truncate"> UserName: </p></div><div class="inline-flex items-center text-base font-semibold text-gray-900 text-gray">${ssrInterpolate(unref(selectedUser).username)}</div></div></li><li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-6 min-w-0"><p class="text-sm font-medium text-gray-900 truncate"> Balance: </p></div><div class="inline-flex items-center text-base font-semibold text-gray-900 text-gray">${ssrInterpolate(unref(selectedUser).balance)}</div></div></li><li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-6 min-w-0"><p class="text-sm font-medium text-gray-900 truncate"> Company: </p></div><div class="inline-flex items-center text-base font-semibold text-gray-900 text-gray">${ssrInterpolate(unref(selectedUser).company_name)}</div></div></li><li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-6 min-w-0"><p class="text-sm font-medium text-gray-900 truncate"> Branch: </p></div><div class="inline-flex items-center text-base font-semibold text-gray-900 text-gray">${ssrInterpolate(unref(selectedUser).branch_name)}</div></div></li><li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-6 min-w-0"><p class="text-sm font-medium text-gray-900 truncate"> Loan Amount: </p></div><div class="inline-flex items-center text-base font-semibold text-gray-900 text-gray">${ssrInterpolate(unref(selectedUser).loan_amount)}</div></div></li></ul></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheDetail = _sfc_main$1;
  _push(ssrRenderComponent(_component_TheDetail, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Detail as default
};
//# sourceMappingURL=Detail-e5f3b965.js.map
