import { _ as _sfc_main$2 } from "./ThePermissions-c68778be.js";
import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoleStore, a as usePermissionStore } from "./AddResourcesDialog-2e5a137b.js";
import { u as useUpdateRoleStore } from "./update-role-bbafe1fb.js";
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
import "./DialogFooter-888ecf09.js";
import "@headlessui/vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpdateRole",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useUpdateRoleStore();
    const { user } = storeToRefs(useAuthStore());
    const { selectedRole, refreshRolesFunction, editIsToActivateRole } = storeToRefs(useRoleStore());
    storeToRefs(usePermissionStore());
    const {
      initializeTogglePermissionsArrayWithSomeItemsChecked
    } = usePermissionStore();
    const {
      data: resources,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/resources/list", {
      query: {
        accessToken: user.value.refresh_token
      }
    }, "$oTYtWJZerW")), __temp = await __temp, __restore(), __temp);
    initializeTogglePermissionsArrayWithSomeItemsChecked(
      resources.value,
      selectedRole.value
    );
    const showNoPermissionCheckedError = ref(false);
    const {
      pending: updateRoleIsPending,
      error: updateIsErroring,
      responseOK
    } = storeToRefs(useUpdateRoleStore());
    const name = ref(selectedRole.value.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThePermissions = _sfc_main$2;
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md p-5 bg-white h-full overflow-scroll" }, _attrs))}><form class="w-full h-full overflow-auto"><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Role Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} placeholder="Enter role name" class="${ssrRenderClass([{
        " bg-red-100": unref(updateIsErroring).hasError && unref(updateIsErroring).field === "name"
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required></div>`);
      if (unref(updateIsErroring).hasError && unref(updateIsErroring).field === "name") {
        _push(`<p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(updateIsErroring).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h4 class="mt-4">Assign Permissions</h4><div class="border rounded-md mb-3 border-gray-200 h-[32rem] overflow-scroll">`);
      _push(ssrRenderComponent(_component_ThePermissions, null, null, _parent));
      _push(`</div>`);
      if (unref(showNoPermissionCheckedError)) {
        _push(`<div class="text-red-500 text-sm mb-3"> No permission selected </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(updateRoleIsPending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Update Role</span>`);
      }
      _push(`</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateRole.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UpdateRole = _sfc_main$1;
  _push(ssrRenderComponent(_component_UpdateRole, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roles/Update.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Update = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Update as default
};
//# sourceMappingURL=Update-cd50b91c.js.map
