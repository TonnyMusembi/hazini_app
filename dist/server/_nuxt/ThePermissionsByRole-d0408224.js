import { u as useRoleStore, a as usePermissionStore, r as roleHasPermission, _ as _sfc_main$4 } from "./AddResourcesDialog-2e5a137b.js";
import { u as useDialogStore, _ as _sfc_main$2, a as __nuxt_component_4 } from "./DialogFooter-888ecf09.js";
import { _ as __nuxt_component_1, a as _sfc_main$3 } from "./DialogTitle-7c8338b5.js";
import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { defineComponent, ref, unref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, withDirectives, isRef, vModelText, openBlock, createBlock, createCommentVNode, useSSRContext, withAsyncContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { TransitionRoot } from "@headlessui/vue";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import { u as useUpdateRoleStore } from "./update-role-bbafe1fb.js";
import { s as storeToRefs } from "../server.mjs";
import "destr";
function filterActiveRoles(roles) {
  if (roles != null && roles) {
    return roles.filter((role) => role.status > 0);
  }
  return [];
}
function filterInactiveRoles(roles) {
  if (roles != null) {
    return roles.filter((role) => role.status === 0);
  }
  return [];
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EditPermissionDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { updateRole } = useUpdateRoleStore();
    const { closeEditPermissionDialog } = useDialogStore();
    const { user } = storeToRefs(useAuthStore());
    const { selectedRole, refreshRolesFunction, editIsToActivateRole } = storeToRefs(useRoleStore());
    const { showEditPermissionDialog } = storeToRefs(useDialogStore());
    const {
      pending: updateRoleIsPending,
      error: updateIsErroring,
      responseOK
    } = storeToRefs(useUpdateRoleStore());
    const confirmEditMessage = ref(`sudo edit role`);
    const confirmEdit = ref("");
    const showInputError = ref(false);
    const disableOrEnableRole = async () => {
      if (confirmEdit.value != confirmEditMessage.value) {
        showInputError.value = true;
        return;
      }
      const accessToken = user.value.refresh_token;
      const name = selectedRole.value.name;
      const permission = "" + selectedRole.value.permission;
      const roleID = selectedRole.value.id;
      const editIsToActivate = editIsToActivateRole.value ? 1 : 0;
      const body = { name, permission, status: editIsToActivate };
      await updateRole(body, accessToken, roleID);
      refreshRolesFunction.value();
      closeEditPermissionDialog();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogComponent = _sfc_main$2;
      const _component_DialogHead = __nuxt_component_1;
      const _component_DialogTitle = _sfc_main$3;
      const _component_Spin = __nuxt_component_0;
      const _component_DialogFooter = __nuxt_component_4;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        as: "template",
        show: unref(showEditPermissionDialog)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogComponent, { closeFunc: unref(closeEditPermissionDialog) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Edit Permissions`);
                      } else {
                        return [
                          createTextVNode("Edit Permissions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DialogTitle, null, null, _parent3, _scopeId2));
                  _push3(`<div class="w-full p-4 space-y-3"${_scopeId2}><div class="text-gray-600 space-y-2"${_scopeId2}><p${_scopeId2}> Editing permissions is <span class="text-red-500"${_scopeId2}>sensitive!</span></p><p${_scopeId2}> We encourage you to be <span class="font-bold"${_scopeId2}>careful</span> while doing it. </p><p${_scopeId2}> Type <span class="text-red-500"${_scopeId2}>${ssrInterpolate(unref(confirmEditMessage))}</span> in the text box below and click the edit button. </p></div><form class=""${_scopeId2}><div class="w-full"${_scopeId2}><input id="confirmEdit" name="confirmEdit" type="text" required${ssrRenderAttr("value", unref(confirmEdit))} class="${ssrRenderClass([{
                    "border-red-300 bg-red-200 ring-red-200": unref(showInputError)
                  }, "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"])}"${_scopeId2}></div>`);
                  if (unref(showInputError)) {
                    _push3(`<div class="text-sm text-red-400 w-full"${_scopeId2}> incorrect! </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex justify-end w-full space-x-3 text-sm font-semibold"${_scopeId2}><div class="flex cursor-pointer justify-center px-4 bg-teal-400 mt-4 py-2 text-slate-50 uppercase tracking-wider rounded-md"${_scopeId2}><span${_scopeId2}>Cancel</span></div><button type="submit" class="flex cursor-pointer justify-center px-4 mt-4 bg-red-700 py-2 text-slate-50 uppercase tracking-wider rounded-md"${_scopeId2}>`);
                  if (unref(updateRoleIsPending)) {
                    _push3(ssrRenderComponent(_component_Spin, { class: "text-slate-50" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span${_scopeId2}>Edit</span>`);
                  }
                  _push3(`</button></div></form></div>`);
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
                    createVNode(_component_DialogHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Edit Permissions")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DialogTitle),
                    createVNode("div", { class: "w-full p-4 space-y-3" }, [
                      createVNode("div", { class: "text-gray-600 space-y-2" }, [
                        createVNode("p", null, [
                          createTextVNode(" Editing permissions is "),
                          createVNode("span", { class: "text-red-500" }, "sensitive!")
                        ]),
                        createVNode("p", null, [
                          createTextVNode(" We encourage you to be "),
                          createVNode("span", { class: "font-bold" }, "careful"),
                          createTextVNode(" while doing it. ")
                        ]),
                        createVNode("p", null, [
                          createTextVNode(" Type "),
                          createVNode("span", { class: "text-red-500" }, toDisplayString(unref(confirmEditMessage)), 1),
                          createTextVNode(" in the text box below and click the edit button. ")
                        ])
                      ]),
                      createVNode("form", {
                        class: "",
                        onSubmit: withModifiers(disableOrEnableRole, ["prevent"])
                      }, [
                        createVNode("div", { class: "w-full" }, [
                          withDirectives(createVNode("input", {
                            id: "confirmEdit",
                            name: "confirmEdit",
                            type: "text",
                            required: "",
                            "onUpdate:modelValue": ($event) => isRef(confirmEdit) ? confirmEdit.value = $event : null,
                            onInput: ($event) => showInputError.value = false,
                            class: ["w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out", {
                              "border-red-300 bg-red-200 ring-red-200": unref(showInputError)
                            }]
                          }, null, 42, ["onUpdate:modelValue", "onInput"]), [
                            [vModelText, unref(confirmEdit)]
                          ])
                        ]),
                        unref(showInputError) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-red-400 w-full"
                        }, " incorrect! ")) : createCommentVNode("", true),
                        createVNode("div", { class: "flex justify-end w-full space-x-3 text-sm font-semibold" }, [
                          createVNode("div", {
                            onClick: unref(closeEditPermissionDialog),
                            class: "flex cursor-pointer justify-center px-4 bg-teal-400 mt-4 py-2 text-slate-50 uppercase tracking-wider rounded-md"
                          }, [
                            createVNode("span", null, "Cancel")
                          ], 8, ["onClick"]),
                          createVNode("button", {
                            type: "submit",
                            class: "flex cursor-pointer justify-center px-4 mt-4 bg-red-700 py-2 text-slate-50 uppercase tracking-wider rounded-md"
                          }, [
                            unref(updateRoleIsPending) ? (openBlock(), createBlock(_component_Spin, {
                              key: 0,
                              class: "text-slate-50"
                            })) : (openBlock(), createBlock("span", { key: 1 }, "Edit"))
                          ])
                        ])
                      ], 40, ["onSubmit"])
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
              createVNode(_component_DialogComponent, { closeFunc: unref(closeEditPermissionDialog) }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Edit Permissions")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DialogTitle),
                  createVNode("div", { class: "w-full p-4 space-y-3" }, [
                    createVNode("div", { class: "text-gray-600 space-y-2" }, [
                      createVNode("p", null, [
                        createTextVNode(" Editing permissions is "),
                        createVNode("span", { class: "text-red-500" }, "sensitive!")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(" We encourage you to be "),
                        createVNode("span", { class: "font-bold" }, "careful"),
                        createTextVNode(" while doing it. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(" Type "),
                        createVNode("span", { class: "text-red-500" }, toDisplayString(unref(confirmEditMessage)), 1),
                        createTextVNode(" in the text box below and click the edit button. ")
                      ])
                    ]),
                    createVNode("form", {
                      class: "",
                      onSubmit: withModifiers(disableOrEnableRole, ["prevent"])
                    }, [
                      createVNode("div", { class: "w-full" }, [
                        withDirectives(createVNode("input", {
                          id: "confirmEdit",
                          name: "confirmEdit",
                          type: "text",
                          required: "",
                          "onUpdate:modelValue": ($event) => isRef(confirmEdit) ? confirmEdit.value = $event : null,
                          onInput: ($event) => showInputError.value = false,
                          class: ["w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out", {
                            "border-red-300 bg-red-200 ring-red-200": unref(showInputError)
                          }]
                        }, null, 42, ["onUpdate:modelValue", "onInput"]), [
                          [vModelText, unref(confirmEdit)]
                        ])
                      ]),
                      unref(showInputError) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-red-400 w-full"
                      }, " incorrect! ")) : createCommentVNode("", true),
                      createVNode("div", { class: "flex justify-end w-full space-x-3 text-sm font-semibold" }, [
                        createVNode("div", {
                          onClick: unref(closeEditPermissionDialog),
                          class: "flex cursor-pointer justify-center px-4 bg-teal-400 mt-4 py-2 text-slate-50 uppercase tracking-wider rounded-md"
                        }, [
                          createVNode("span", null, "Cancel")
                        ], 8, ["onClick"]),
                        createVNode("button", {
                          type: "submit",
                          class: "flex cursor-pointer justify-center px-4 mt-4 bg-red-700 py-2 text-slate-50 uppercase tracking-wider rounded-md"
                        }, [
                          unref(updateRoleIsPending) ? (openBlock(), createBlock(_component_Spin, {
                            key: 0,
                            class: "text-slate-50"
                          })) : (openBlock(), createBlock("span", { key: 1 }, "Edit"))
                        ])
                      ])
                    ], 40, ["onSubmit"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditPermissionDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThePermissionsByRole",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useDialogStore();
    const { user } = storeToRefs(useAuthStore());
    const { selectedRole } = storeToRefs(useRoleStore());
    storeToRefs(
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
    }, "$AGR4iby1P7")), __temp = await __temp, __restore(), __temp);
    refresh();
    const hasPermission = (permission) => {
      if (selectedRole.value != null) {
        return roleHasPermission(selectedRole.value, permission);
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddResourcesDialog = _sfc_main$4;
      const _component_EditPermissionDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md relative pb-5" }, _attrs))}><div class="relative h-full overflow-auto"><div class="flex justify-between w-full text-sm font-bold text-left text-gray-500 px-6 py-3 tracking-wide"><div class="">Action</div><div class="">Allowed</div></div><!--[-->`);
      ssrRenderList(unref(resources), (resourceGroup, index1) => {
        _push(`<div class="w-full text-sm text-left text-gray-500 cursor-pointer"><div class="px-6 text-xs py-3 text-gray-900 font-semibold">${ssrInterpolate(resourceGroup.resource_group_name)}</div><div class="bg-white py-3"><!--[-->`);
        ssrRenderList(resourceGroup.resources, (resource, index2) => {
          _push(`<div class="flex justify-between w-full hover:bg-teal-100"><div class="px-6 font-medium whitespace-nowrap">${ssrInterpolate(resource.resource_name)}</div><div class="px-6"><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer" disabled${ssrIncludeBooleanAttr(hasPermission(resource.permission)) ? " checked" : ""}><div class="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>`);
          if (hasPermission(resource.permission)) {
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
      _push(ssrRenderComponent(_component_EditPermissionDialog, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePermissionsByRole.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  filterInactiveRoles as a,
  filterActiveRoles as f
};
//# sourceMappingURL=ThePermissionsByRole-d0408224.js.map
