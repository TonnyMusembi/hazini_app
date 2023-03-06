import { d as defineStore, s as storeToRefs } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext, withAsyncContext, withCtx, createVNode } from "vue";
import "destr";
import bigInt from "big-integer";
import { u as useDialogStore, _ as _sfc_main$3, a as __nuxt_component_4 } from "./DialogFooter-888ecf09.js";
import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { TransitionRoot, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const useRoleStore = defineStore("roles-store", {
  state: () => ({
    selectedRole: null,
    editIsToActivateRole: false,
    refreshRolesFunction: () => void 0
  }),
  actions: {
    setSelectedRole(role) {
      this.selectedRole = role;
    },
    setEditRoleIntention(editIsToActivate) {
      this.editIsToActivateRole = editIsToActivate;
    },
    setRefreshRolesFunction(refresh) {
      this.refreshRolesFunction = refresh;
    }
  },
  persist: true
});
function calculatePermission(permissions) {
  return permissions.reduce(
    (acc, permission) => bigInt(acc).or(permission).toString(),
    bigInt(0)
  );
}
function roleHasPermission(selectedRole, permission) {
  if (selectedRole == null) {
    return false;
  }
  return (selectedRole.permission & permission) === permission;
}
const usePermissionStore = defineStore("permissions-store", {
  state: () => ({
    togglePermissionsArray: [],
    computedPermission: null,
    selectedPermission: null,
    togglePermissionPayload: null
  }),
  getters: {
    hasPermission: (state) => {
      return (index) => {
        if (state.togglePermissionsArray.length) {
          const found = state.togglePermissionsArray.find(
            (element) => element.index === index
          );
          if (found != void 0) {
            return found.permissionIsChecked;
          }
        }
        return false;
      };
    }
  },
  actions: {
    setTogglePermissionsArray(payload) {
      if (payload.length > 0) {
        let togglePermissionsArray = [];
        payload.forEach((resourceGroup, index1) => {
          resourceGroup.resources.forEach((resource, index2) => {
            togglePermissionsArray.push({
              index: parseInt(`${index1}${index2}`),
              permissionIsChecked: false,
              permission: resource.permission
            });
          });
        });
        this.togglePermissionsArray = togglePermissionsArray;
      }
    },
    unsetTogglePermissionsArray() {
      this.togglePermissionsArray = [];
    },
    togglePermission() {
      let permissionIsChecked = this.togglePermissionsArray;
      if (permissionIsChecked.length && this.togglePermissionPayload != null) {
        const found = permissionIsChecked.findIndex(
          (element) => {
            var _a;
            return element.index === ((_a = this.togglePermissionPayload) == null ? void 0 : _a.index);
          }
        );
        permissionIsChecked[found] = this.togglePermissionPayload;
      }
      this.togglePermissionsArray = permissionIsChecked;
      this.computePermission();
      console.log(this.computedPermission);
    },
    computePermission() {
      const filteredPermissions = this.togglePermissionsArray.filter(
        (permission) => {
          return permission.permissionIsChecked;
        }
      );
      const permissionsOnly = filteredPermissions.map((permission) => {
        return "" + permission.permission;
      });
      console.log(permissionsOnly);
      this.computedPermission = calculatePermission(permissionsOnly);
    },
    setSelectedPermission(permission) {
      this.selectedPermission = permission;
    },
    setTogglePermissionPayload(payload) {
      this.togglePermissionPayload = payload;
    },
    unsetTogglePermissionPayload(payload) {
      this.togglePermissionPayload = null;
    },
    initializeTogglePermissionsArrayWithSomeItemsChecked(payload, selectedRole) {
      if (payload.length > 0) {
        let togglePermissionsArray = [];
        payload.forEach((resourceGroup, index1) => {
          resourceGroup.resources.forEach((resource, index2) => {
            togglePermissionsArray.push({
              index: parseInt(`${index1}${index2}`),
              permissionIsChecked: roleHasPermission(
                selectedRole,
                resource.permission
              ),
              permission: resource.permission
            });
          });
        });
        this.togglePermissionsArray = togglePermissionsArray;
      }
    }
  }
});
const useCreateResourceGroupStore = defineStore(
  "create-resource-group-store",
  {
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
      async createResourceGroup(body, accessToken) {
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
          const { data } = await useFetch("/api/resource-group/create", {
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
                  message: "Invalid name",
                  field: "name"
                };
              }
              if (response.status === 403) {
                error = {
                  hasError: true,
                  message: "Name already exists",
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
          }, "$h9oGncb6sM");
          this.pending = false;
          this.error = error;
          this.responseOK = responseOK;
        } catch (err) {
          this.pending = false;
        }
      }
    }
  }
);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddResourceGroup",
  __ssrInlineRender: true,
  props: {
    refreshPermission: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    useCreateResourceGroupStore();
    storeToRefs(useAuthStore());
    const { responseOK, pending: createResourceGroupIsPending } = storeToRefs(
      useCreateResourceGroupStore()
    );
    const resourceGroupName = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="w-full"><label for="resourceGroupName" class="text-sm text-gray-600">Resource Group Name</label><input id="resourceGroupName" name="resourceGroupName" type="resourceGroupName" required${ssrRenderAttr("value", unref(resourceGroupName))} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"></div><button type="submit" class="flex px-4 w-full mt-10 bg-teal-700 py-2 text-slate-50 uppercase tracking-wider rounded-md items-center justify-center">`);
      if (unref(createResourceGroupIsPending)) {
        _push(ssrRenderComponent(_component_Spin, { class: "block text-slate-50" }, null, _parent));
      } else {
        _push(`<span>Add Resource Group </span>`);
      }
      _push(`</button></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddResourceGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useCreateResourceStore = defineStore("create-resource-store", {
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
    async createResource(body, accessToken) {
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
        const { data } = await useFetch("/api/resources/create", {
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
                message: "Invalid name",
                field: "name"
              };
            }
            if (response.status === 403) {
              error = {
                hasError: true,
                message: "Name already exists",
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
        }, "$3kaFCv0G9w");
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
  __name: "AddResource",
  __ssrInlineRender: true,
  props: {
    refreshPermission: {
      type: Function,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    useCreateResourceStore();
    const { user } = storeToRefs(useAuthStore());
    const { responseOK, pending: createResourceIsPending } = storeToRefs(
      useCreateResourceStore()
    );
    const pageSize = ref(10);
    const pageID = ref(1);
    const {
      data: resourceGroups,
      pending,
      error,
      refresh: refreshResourceGroups
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/resource-group/list", {
      query: {
        pageSize: pageSize.value,
        pageID: pageID.value,
        accessToken: user.value.refresh_token
      }
    }, "$BsXBB7GDj1")), __temp = await __temp, __restore(), __temp);
    refreshResourceGroups();
    const resourceName = ref("");
    ref();
    const permission = ref();
    const status = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Select Resource Group</label><select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><!--[-->`);
      ssrRenderList(unref(resourceGroups), (resourceGroup) => {
        _push(`<option${ssrRenderAttr("value", resourceGroup.id)}>${ssrInterpolate(resourceGroup.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="w-full mb-3"><label for="resourceName" class="text-sm text-gray-600">Resource Name</label><input id="resourceName" name="resourceName" type="resourceName" required${ssrRenderAttr("value", unref(resourceName))} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"></div><div class="w-full mb-3"><label for="permission" class="text-sm text-gray-600">Permission</label><input id="permission" name="permission" type="permission" required${ssrRenderAttr("value", unref(permission))} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"></div><div class="w-full mb-3"><label for="status" class="text-sm text-gray-600">Status</label><input id="status" name="status" type="status" required${ssrRenderAttr("value", unref(status))} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"></div><button type="submit" class="flex px-4 w-full mt-10 bg-teal-700 py-2 text-slate-50 uppercase tracking-wider rounded-md items-center justify-center">`);
      if (unref(createResourceIsPending)) {
        _push(ssrRenderComponent(_component_Spin, { class: "block text-slate-50" }, null, _parent));
      } else {
        _push(`<span>Add Resource Group </span>`);
      }
      _push(`</button></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddResource.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddResourcesDialog",
  __ssrInlineRender: true,
  props: {
    refreshPermission: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const { showAddResourcesDialog } = storeToRefs(useDialogStore());
    const { closeAddResourcesDialog } = useDialogStore();
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogComponent = _sfc_main$3;
      const _component_AddResourceGroup = _sfc_main$2;
      const _component_AddResource = _sfc_main$1;
      const _component_DialogFooter = __nuxt_component_4;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: unref(showAddResourcesDialog)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogComponent, { closeFunc: unref(closeAddResourcesDialog) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full py-10"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TabGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabList), { class: "flex space-x-1 rounded-xl bg-teal-900/20 mx-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<button class="${ssrRenderClass([
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ])}"${_scopeId5}> Add Resource Group </button>`);
                                  } else {
                                    return [
                                      createVNode("button", {
                                        class: [
                                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                          selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                        ]
                                      }, " Add Resource Group ", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<button class="${ssrRenderClass([
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ])}"${_scopeId5}> Add Resource </button>`);
                                  } else {
                                    return [
                                      createVNode("button", {
                                        class: [
                                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                          selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                        ]
                                      }, " Add Resource ", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Tab), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                        selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                      ]
                                    }, " Add Resource Group ", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                        selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                      ]
                                    }, " Add Resource ", 2)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TabPanel), { class: [
                                  "rounded-xl bg-white",
                                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                                ] }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), { class: [
                                  "rounded-xl bg-white",
                                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                                ] }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl bg-teal-900/20 mx-5" }, {
                            default: withCtx(() => [
                              createVNode(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ]
                                  }, " Add Resource Group ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ]
                                  }, " Add Resource ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanels), { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx(() => [
                                  createVNode(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx(() => [
                                  createVNode(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-sm text-gray-600"${_scopeId3}></p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-sm text-gray-600" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "w-full py-10" }, [
                      createVNode(unref(TabGroup), null, {
                        default: withCtx(() => [
                          createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl bg-teal-900/20 mx-5" }, {
                            default: withCtx(() => [
                              createVNode(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ]
                                  }, " Add Resource Group ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                      selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                    ]
                                  }, " Add Resource ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanels), { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx(() => [
                                  createVNode(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), { class: [
                                "rounded-xl bg-white",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                              ] }, {
                                default: withCtx(() => [
                                  createVNode(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_DialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm text-gray-600" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogComponent, { closeFunc: unref(closeAddResourcesDialog) }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full py-10" }, [
                    createVNode(unref(TabGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl bg-teal-900/20 mx-5" }, {
                          default: withCtx(() => [
                            createVNode(unref(Tab), { as: "template" }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                    selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                  ]
                                }, " Add Resource Group ", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), { as: "template" }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2",
                                    selected ? "bg-teal-100 shadow" : "text-teal-700 hover:bg-white/[0.12] hover:teal-800"
                                  ]
                                }, " Add Resource ", 2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(TabPanel), { class: [
                              "rounded-xl bg-white",
                              "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                            ] }, {
                              default: withCtx(() => [
                                createVNode(_component_AddResourceGroup, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), { class: [
                              "rounded-xl bg-white",
                              "ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2"
                            ] }, {
                              default: withCtx(() => [
                                createVNode(_component_AddResource, { refreshPermission: __props.refreshPermission }, null, 8, ["refreshPermission"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_DialogFooter, null, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-sm text-gray-600" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["closeFunc"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddResourcesDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  usePermissionStore as a,
  roleHasPermission as r,
  useRoleStore as u
};
//# sourceMappingURL=AddResourcesDialog-2e5a137b.js.map
