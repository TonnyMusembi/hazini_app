import { u as useRoleStore, a as usePermissionStore, _ as _sfc_main$1 } from "./AddResourcesDialog-2e5a137b.js";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { s as storeToRefs } from "../server.mjs";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThePermissions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { user } = storeToRefs(useAuthStore());
    storeToRefs(useRoleStore());
    const { togglePermissionsArray, hasPermission } = storeToRefs(
      usePermissionStore()
    );
    usePermissionStore();
    ref(10);
    ref(1);
    const {
      data: resources,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/resources/list", {
      query: {
        accessToken: user.value.refresh_token
      }
    }, "$fe6gf1yb3w")), __temp = await __temp, __restore(), __temp);
    refresh();
    const isChecked = (index1, index2) => {
      const index = parseInt(`${index1}${index2}`);
      return hasPermission.value(index);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddResourcesDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md relative pb-5" }, _attrs))}><div class="relative h-full overflow-auto"><div class="flex justify-between w-full text-sm font-bold text-left text-gray-500 px-6 py-3 tracking-wide"><div class="">Action</div><div class="">Allowed</div></div><!--[-->`);
      ssrRenderList(unref(resources), (resourceGroup, index1) => {
        _push(`<div class="w-full text-sm text-left text-gray-500 cursor-pointer"><div class="text-xs text-gray-800"><div><div colspan="2" scope="col" class="px-6 py-3 text-gray-900 font-semibold">${ssrInterpolate(resourceGroup.resource_group_name)}</div></div></div><div class="bg-white py-3"><!--[-->`);
        ssrRenderList(resourceGroup.resources, (resource, index2) => {
          _push(`<div class="flex justify-between w-full hover:bg-teal-100"><div class="px-6 font-medium whitespace-nowrap">${ssrInterpolate(resource.resource_name)}</div><div class="px-6"><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" class="sr-only peer"${ssrIncludeBooleanAttr(isChecked(index1, index2, resource.permission)) ? " checked" : ""}><div class="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>`);
          if (isChecked(index1, index2, resource.permission)) {
            _push(`<span class="ml-3 text-sm font-medium text-gray-900">Yes</span>`);
          } else {
            _push(`<span class="ml-3 text-sm font-medium text-gray-900">No</span>`);
          }
          _push(`</label></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_AddResourcesDialog, { refreshPermission: unref(refresh) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePermissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ThePermissions-c68778be.js.map
