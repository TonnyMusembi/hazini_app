import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, defineAsyncComponent, defineComponent, unref, toDisplayString, Transition, renderSlot } from "vue";
import { _ as _export_sfc, b as __nuxt_component_0$1, s as storeToRefs, n as navigateTo } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import "destr";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { UserIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
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
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./TheLogo-209bbba2.js").then((m) => m.default || m));
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_LazyTheLogo = __nuxt_component_0_lazy;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block h-full overflow-y-scroll" }, _attrs))}><div class="w-full p-3">`);
  _push(ssrRenderComponent(_component_LazyTheLogo, null, null, _parent));
  _push(`</div><nav class="block space-y-3 text-teal-100 p-5">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5z"${_scopeId}></path></svg><span${_scopeId}>Dashboard</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6z"
            }),
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5z"
            })
          ])),
          createVNode("span", null, "Dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/revenues",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"${_scopeId}></path></svg><span${_scopeId}>Revenues</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            })
          ])),
          createVNode("span", null, "Revenues")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/companies",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"${_scopeId}></path></svg><span${_scopeId}>Companies</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            })
          ])),
          createVNode("span", null, "Companies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/branches",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75z"${_scopeId}></path></svg><span${_scopeId}>Branches</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75z"
            })
          ])),
          createVNode("span", null, "Branches")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/roles/assign",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"${_scopeId}></path></svg><span${_scopeId}>Assign Role</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            class: "w-6 h-6"
          }, [
            createVNode("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            })
          ])),
          createVNode("span", null, "Assign Role")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/users",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"${_scopeId}></path></svg><span${_scopeId}>All Users</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
            })
          ])),
          createVNode("span", null, "All Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/loanapprovals",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"${_scopeId}></path></svg><span${_scopeId}>Loan Approvals</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
            })
          ])),
          createVNode("span", null, "Loan Approvals")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/loans",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"${_scopeId}></path></svg><span${_scopeId}>Loans</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            })
          ])),
          createVNode("span", null, "Loans")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/loan-products",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"${_scopeId}></path></svg><span${_scopeId}>Loan Products</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-6 h-6"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            })
          ])),
          createVNode("span", null, "Loan Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/payments",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"${_scopeId}></path></svg><span${_scopeId}>Payments</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            })
          ])),
          createVNode("span", null, "Payments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/disbursements",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"${_scopeId}></path></svg><span${_scopeId}> Disbursements </span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            })
          ])),
          createVNode("span", null, " Disbursements ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"${_scopeId}></path></svg><span${_scopeId}>Deduction</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            })
          ])),
          createVNode("span", null, "Deduction")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/deductionhistory",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"${_scopeId}></path></svg><span${_scopeId}>Deduction Histories</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            })
          ])),
          createVNode("span", null, "Deduction Histories")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/textmessages",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"${_scopeId}></path></svg><span${_scopeId}>Text Messages</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            })
          ])),
          createVNode("span", null, "Text Messages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/notifications",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"${_scopeId}></path></svg><span${_scopeId}>Notifications</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-6 h-6"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            })
          ])),
          createVNode("span", null, "Notifications")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/configurations",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"${_scopeId}></path></svg><span${_scopeId}>Configurations</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            }),
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            })
          ])),
          createVNode("span", null, "Configurations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/profile",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"${_scopeId}></path></svg><span${_scopeId}>Profile</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            })
          ])),
          createVNode("span", null, "Profile")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"${_scopeId}></path></svg><span${_scopeId}>MOU</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"
            })
          ])),
          createVNode("span", null, "MOU")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auditlogs",
    class: "cursor-pointer text-sm flex space-x-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"${_scopeId}></path></svg><span${_scopeId}>Audit logs</span>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            class: "w-6 h-6",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            })
          ])),
          createVNode("span", null, "Audit logs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThePopover",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = storeToRefs(useAuthStore());
    const { logout: logoutUser } = useAuthStore();
    const logout = () => {
      logoutUser();
      navigateTo("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 right-2 z-50" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Popover), { class: "relative" }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverButton), {
              class: [open ? "" : "text-opacity-90", "group inline-flex items-center rounded-md px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserIcon), { class: "mr-2 h-5 w-5 text-gray-700" }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Hi ${ssrInterpolate(unref(user).user.full_name)}</span>`);
                  _push3(ssrRenderComponent(unref(ChevronDownIcon), {
                    class: [open ? "" : "text-opacity-70", "ml-2 h-5 w-5 text-[#37899A] transition duration-150 ease-in-out group-hover:text-opacity-80"],
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(UserIcon), { class: "mr-2 h-5 w-5 text-gray-700" }),
                    createVNode("span", null, "Hi " + toDisplayString(unref(user).user.full_name), 1),
                    createVNode(unref(ChevronDownIcon), {
                      class: [open ? "" : "text-opacity-70", "ml-2 h-5 w-5 text-[#37899A] transition duration-150 ease-in-out group-hover:text-opacity-80"],
                      "aria-hidden": "true"
                    }, null, 8, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(PopoverPanel), { class: "absolute shadow-xl right-0 z-50 mt-3 w-64 max-w-sm transform px-3 sm:px-0" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId2}><div class="relative grid gap-8 bg-white"${_scopeId2}><div class="flex items-center cursor-pointer rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"${_scopeId2}><div class="flex h-12 w-24 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(UserIcon), { class: "text-teal-700" }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="ml-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_link, { to: "/profile" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-sm font-medium text-gray-900"${_scopeId3}>Profile</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Profile")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="bg-gray-50 p-4"${_scopeId2}><div class="cursor-pointer flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-240 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"${_scopeId2}><span class="flex items-center"${_scopeId2}><span class="text-sm font-medium text-gray-900"${_scopeId2}> Log Out </span></span><span class="block text-sm text-gray-500"${_scopeId2}> Sign out from your account </span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                      createVNode("div", { class: "relative grid gap-8 bg-white" }, [
                        createVNode("div", { class: "flex items-center cursor-pointer rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50" }, [
                          createVNode("div", { class: "flex h-12 w-24 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12" }, [
                            createVNode(unref(UserIcon), { class: "text-teal-700" })
                          ]),
                          createVNode("div", { class: "ml-4" }, [
                            createVNode(_component_nuxt_link, { to: "/profile" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Profile")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 p-4" }, [
                        createVNode("div", {
                          onClick: logout,
                          class: "cursor-pointer flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-240 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        }, [
                          createVNode("span", { class: "flex items-center" }, [
                            createVNode("span", { class: "text-sm font-medium text-gray-900" }, " Log Out ")
                          ]),
                          createVNode("span", { class: "block text-sm text-gray-500" }, " Sign out from your account ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverButton), {
                class: [open ? "" : "text-opacity-90", "group inline-flex items-center rounded-md px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
              }, {
                default: withCtx(() => [
                  createVNode(unref(UserIcon), { class: "mr-2 h-5 w-5 text-gray-700" }),
                  createVNode("span", null, "Hi " + toDisplayString(unref(user).user.full_name), 1),
                  createVNode(unref(ChevronDownIcon), {
                    class: [open ? "" : "text-opacity-70", "ml-2 h-5 w-5 text-[#37899A] transition duration-150 ease-in-out group-hover:text-opacity-80"],
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1032, ["class"]),
              createVNode(Transition, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-240",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-240",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverPanel), { class: "absolute shadow-xl right-0 z-50 mt-3 w-64 max-w-sm transform px-3 sm:px-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" }, [
                        createVNode("div", { class: "relative grid gap-8 bg-white" }, [
                          createVNode("div", { class: "flex items-center cursor-pointer rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50" }, [
                            createVNode("div", { class: "flex h-12 w-24 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12" }, [
                              createVNode(unref(UserIcon), { class: "text-teal-700" })
                            ]),
                            createVNode("div", { class: "ml-4" }, [
                              createVNode(_component_nuxt_link, { to: "/profile" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Profile")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "bg-gray-50 p-4" }, [
                          createVNode("div", {
                            onClick: logout,
                            class: "cursor-pointer flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-240 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          }, [
                            createVNode("span", { class: "flex items-center" }, [
                              createVNode("span", { class: "text-sm font-medium text-gray-900" }, " Log Out ")
                            ]),
                            createVNode("span", { class: "block text-sm text-gray-500" }, " Sign out from your account ")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePopover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_ThePopover = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3 h-12 shadow-md w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ThePopover, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 px-4 h-full" }, _attrs))}><div class="py-3 mt-1 font-semibold text-lg text-gray-500 tracking-wider">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</div><section>`);
  ssrRenderSlot(_ctx.$slots, "main", {}, null, _push, _parent);
  _push(`</section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheSidebar = __nuxt_component_0;
  const _component_TheNavbar = __nuxt_component_1;
  const _component_TheMain = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full overflow-scroll" }, _attrs))}><div class="w-1/6 h-full overflow-scroll bg-[#2C7075] shadow-md">`);
  _push(ssrRenderComponent(_component_TheSidebar, null, null, _parent));
  _push(`</div><div class="w-5/6 relative">`);
  _push(ssrRenderComponent(_component_TheNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_TheMain, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    main: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-cbf90298.js.map
