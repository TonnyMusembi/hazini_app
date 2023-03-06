import { s as storeToRefs } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { u as useAuthStore } from "./login-5863c907.js";
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
const _imports_0 = "" + __buildAssetsURL("beams-cover_95.1c729e80.jpeg");
const _imports_1 = "" + __buildAssetsURL("hazini-logo-landscape.1555fc92.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const { viewToDisplay } = storeToRefs(useAuthStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-img-1 relative flex flex-1 bg-img-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute top-0 inset-0 left-1/2 -ml-[47.5rem] w-[122.5rem] max-w-none"><div class="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"><svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg></div><div class="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16"><div class="pb-8"><div class="flex space-x-2"><img${ssrRenderAttr("src", _imports_1)}></div></div><h1 class="sr-only">Log in to your hazini UI account</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer class="relative shrink-0 mt-6"><div class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4"><p class="text-center sm:text-left">`);
      if (unref(viewToDisplay) === "REGISTER") {
        _push(`<span>Already registered?</span>`);
      } else {
        _push(`<span>Don&#39;t have an account?</span>`);
      }
      _push(`</p><div class="cursor-pointer inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"><span>`);
      if (unref(viewToDisplay) === "REGISTER") {
        _push(`<span>Login</span>`);
      } else {
        _push(`<span>Register</span>`);
      }
      _push(`<span aria-hidden="true">→</span></span></div></div></footer></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=auth-ce2dccd6.js.map
