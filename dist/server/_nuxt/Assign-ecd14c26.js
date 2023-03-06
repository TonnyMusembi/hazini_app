import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { f as filterActiveRoles, _ as _sfc_main$2 } from "./ThePermissionsByRole-d0408224.js";
import { defineComponent, ref, withAsyncContext, unref, useSSRContext } from "vue";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useRoleStore } from "./AddResourcesDialog-2e5a137b.js";
import "./DialogFooter-888ecf09.js";
import "@headlessui/vue";
import "./DialogTitle-7c8338b5.js";
import "./update-role-bbafe1fb.js";
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
const useAssignRoleStore = defineStore("assign-role-store", {
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
    async assignRole(body, accessToken) {
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
        const { data } = await useFetch("/api/users/assign-role", {
          method: "put",
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
                message: "role_id  or user_id is invalid",
                field: "none"
              };
            }
            if (response.status == 401) {
              error = {
                hasError: true,
                message: "you are not authorised to perform that action",
                field: "none"
              };
            }
            if (response.status === 404) {
              error = {
                hasError: true,
                message: "Role or user not found",
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
        }, "$SwGdW3BmQ0");
        this.pending = false;
        this.error = error;
        this.responseOK = responseOK;
      } catch (err) {
        this.pending = false;
      }
    },
    unsetError() {
      this.error = {
        hasError: false,
        message: "",
        field: ""
      };
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AssignRole",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoleStore();
    useAssignRoleStore();
    const { user } = storeToRefs(useAuthStore());
    const { selectedRole } = storeToRefs(useRoleStore());
    const {
      pending: assignRoleIsPending,
      error: assignRoleIsErroring,
      responseOK
    } = storeToRefs(useAssignRoleStore());
    const phone = ref("");
    const loading = ref(false);
    ref(null);
    const searchedUser = ref();
    const pageSize = ref(10);
    const pageID = ref(1);
    const {
      data: roles,
      pending,
      error: fetchRoleIsErroring,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/roles/list", {
      query: {
        accessToken: user.value.refresh_token,
        pageID: pageID.value,
        pageSize: pageSize.value
      }
    }, "$9G7s94l2e1")), __temp = await __temp, __restore(), __temp);
    refresh();
    const activeRoles = () => {
      if (roles.value != null && roles.value) {
        return filterActiveRoles(roles.value);
      }
      return [];
    };
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      const _component_ThePermissionsByRole = _sfc_main$2;
      const _component_spin = __nuxt_component_0;
      _push(`<!--[--><form class="mb-3 w-full"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search"${ssrRenderAttr("value", unref(phone))} class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Enter phone number and hit enter..." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form>`);
      if (unref(searchedUser)) {
        _push(`<div>`);
        if (unref(loading)) {
          _push(ssrRenderComponent(_component_Spin, { class: "text-teal-700" }, null, _parent));
        } else {
          _push(`<div class="shadow-sm rounded-md w-full columns-2 bg-gray-200 p-4"><div>${ssrInterpolate(unref(searchedUser).full_names)}</div><div>${ssrInterpolate(unref(searchedUser).phone_number)}</div></div>`);
        }
        _push(`<form class="mb-3 w-full"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Select Role to assign</label><select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><!--[-->`);
        ssrRenderList(activeRoles(), (role) => {
          _push(`<option${ssrRenderAttr("value", role)}>${ssrInterpolate(role.name)}</option>`);
        });
        _push(`<!--]--></select></form><div class="h-[25rem] overflow-scroll">`);
        if (unref(selectedRole) != null) {
          _push(ssrRenderComponent(_component_ThePermissionsByRole, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex justify-end py-3"><button type="submit" class="rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
        if (unref(assignRoleIsPending)) {
          _push(ssrRenderComponent(_component_spin, null, null, _parent));
        } else {
          _push(`<span>Assign Role</span>`);
        }
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AssignRole.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AssignRole = _sfc_main$1;
  _push(ssrRenderComponent(_component_AssignRole, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roles/Assign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Assign = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Assign as default
};
//# sourceMappingURL=Assign-ecd14c26.js.map
