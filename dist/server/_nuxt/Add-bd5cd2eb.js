import { _ as _sfc_main$2 } from "./ThePermissions-c68778be.js";
import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { defineComponent, ref, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import { a as usePermissionStore } from "./AddResourcesDialog-2e5a137b.js";
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
const useCreateRoleStore = defineStore("create-role-store", {
  state: () => ({
    pending: false,
    error: {
      hasError: false,
      message: "",
      field: ""
    },
    responseOK: false
  }),
  actions: {
    async createRole(body, accessToken) {
      try {
        this.pending = true;
        let error = {
          hasError: false,
          message: "",
          field: ""
        };
        this.error = error;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/roles/create", {
          method: "post",
          body: { body, accessToken },
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
            }
          },
          async onResponseError({ request, response, options }) {
            if (response.status == 400) {
              error = {
                hasError: true,
                message: "permission or name not provided",
                field: "none"
              };
            }
            if (response.status === 403) {
              error = {
                hasError: true,
                message: "Role name already exists",
                field: "name"
              };
            }
            if (response.status === 500) {
              error = {
                hasError: true,
                message: "Internal server error",
                field: "none"
              };
            }
          }
        }, "$mDaJ6P7nJa");
        this.pending = false;
        this.error = error;
        this.responseOK = responseOK;
      } catch (err) {
        this.pending = false;
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddRole",
  __ssrInlineRender: true,
  setup(__props) {
    useCreateRoleStore();
    storeToRefs(usePermissionStore());
    const { unsetTogglePermissionsArray } = usePermissionStore();
    const {
      pending: addRoleIsPending,
      error: addRoleIsErroring,
      responseOK
    } = storeToRefs(useCreateRoleStore());
    storeToRefs(useAuthStore());
    const name = ref("");
    const showNoPermissionCheckedError = ref(false);
    onUnmounted(() => {
      unsetTogglePermissionsArray();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThePermissions = _sfc_main$2;
      const _component_spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md p-5 bg-white h-full overflow-scroll" }, _attrs))}><form class="w-full h-full overflow-auto"><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Role Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} placeholder="Enter role name" class="${ssrRenderClass([{
        " bg-red-100": unref(addRoleIsErroring).hasError && unref(addRoleIsErroring).field === "name"
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required></div>`);
      if (unref(addRoleIsErroring).hasError && unref(addRoleIsErroring).field === "name") {
        _push(`<p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(addRoleIsErroring).message)}</p>`);
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
      if (unref(addRoleIsPending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Add Role</span>`);
      }
      _push(`</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddRole.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AddRole = _sfc_main$1;
  _push(ssrRenderComponent(_component_AddRole, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roles/Add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Add as default
};
//# sourceMappingURL=Add-bd5cd2eb.js.map
