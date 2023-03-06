import { s as storeToRefs, b as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoleStore, a as usePermissionStore } from "./AddResourcesDialog-2e5a137b.js";
import { u as useDialogStore } from "./DialogFooter-888ecf09.js";
import { f as filterActiveRoles, a as filterInactiveRoles, _ as _sfc_main$2 } from "./ThePermissionsByRole-d0408224.js";
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
import "big-integer";
import "./Spin-091d23d7.js";
import "@headlessui/vue";
import "./DialogTitle-7c8338b5.js";
import "./update-role-bbafe1fb.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheRoles",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useDialogStore();
    const { user } = storeToRefs(useAuthStore());
    const { selectedRole } = storeToRefs(useRoleStore());
    const { setSelectedRole, setEditRoleIntention, setRefreshRolesFunction } = useRoleStore();
    usePermissionStore();
    const pageSize = ref(10);
    const pageID = ref(1);
    const {
      data: roles,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/roles/list", {
      query: {
        accessToken: user.value.refresh_token,
        pageID: pageID.value,
        pageSize: pageSize.value
      }
    }, "$g29Ok2bgyj")), __temp = await __temp, __restore(), __temp);
    refresh();
    const activeRoles = () => {
      return filterActiveRoles(roles.value);
    };
    const inactiveRoles = () => {
      return filterInactiveRoles(roles.value);
    };
    setRefreshRolesFunction(refresh);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md" }, _attrs))}><div class="overflow-x-auto"><div class="w-full text-sm text-left text-gray-500"><div class="flex justify-between w-full text-sm font-bold text-left text-gray-500 px-6 py-3 tracking-wide"><div class="">Roles</div></div><div class="px-6 text-sm py-3 text-gray-900 font-semibold">Active</div><!--[-->`);
      ssrRenderList(activeRoles(), (role) => {
        var _a;
        _push(`<div class="${ssrRenderClass([{ "bg-teal-100": role.id === ((_a = unref(selectedRole)) == null ? void 0 : _a.id) }, "bg-white hover:bg-teal-100 cursor-pointer columns-3 px-6 py-2 font-medium"])}"><div class="w-ful whitespace-nowrap">${ssrInterpolate(role.name)}</div><div class="w-full flex justify-end whitespace-nowrap text-teal-700">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/roles/update" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-full flex justify-end text-red-400"> Deactivate </div></div>`);
      });
      _push(`<!--]--><div class="px-6 text-sm py-6 text-gray-900 font-semibold"> Deactivated </div><!--[-->`);
      ssrRenderList(inactiveRoles(), (role) => {
        var _a;
        _push(`<div class="${ssrRenderClass([{ "bg-teal-100": role.id === ((_a = unref(selectedRole)) == null ? void 0 : _a.id) }, "bg-white hover:bg-teal-100 cursor-pointer columns-2 px-6 py-2 font-medium"])}"><div class="w-ful whitespace-nowrap">${ssrInterpolate(role.name)}</div><div class="w-full flex justify-end text-teal-700"> Activate </div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheRoles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showButtons = ref(false);
    useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheRoles = _sfc_main$1;
      const _component_ThePermissionsByRole = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="flex h-[35rem] space-x-10">`);
      _push(ssrRenderComponent(_component_TheRoles, { class: "w-1/3" }, null, _parent));
      _push(` `);
      _push(ssrRenderComponent(_component_ThePermissionsByRole, { class: "w-2/3" }, null, _parent));
      _push(`</div>`);
      if (unref(showButtons)) {
        _push(`<div class="relative block"><div class="cursor-pointer hover:bg-teal-900 hover:border-separate hover:border-gray-600 rounded-full absolute bottom-0 right-5 z-50 flex justify-center text-white items-center bg-teal-600 h-12 w-12 p-5 shadow-xl"> + </div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/roles/add" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="cursor-pointer hover:bg-teal-900 hover:border-separate hover:border-gray-600 rounded-full absolute -bottom-14 right-5 z-50 flex justify-center text-white items-center bg-teal-500 h-12 w-12 p-5 shadow-xl"${_scopeId}> + </div>`);
            } else {
              return [
                createVNode("div", { class: "cursor-pointer hover:bg-teal-900 hover:border-separate hover:border-gray-600 rounded-full absolute -bottom-14 right-5 z-50 flex justify-center text-white items-center bg-teal-500 h-12 w-12 p-5 shadow-xl" }, " + ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cursor-pointer hover:bg-teal-500 hover:border-separate hover:border-gray-600 rounded-full absolute bottom-10 right-8 z-50 flex justify-center text-white items-center bg-teal-900 h-12 w-12 p-5 shadow-xl"> &gt; </div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/permissions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-baf831ec.js.map
