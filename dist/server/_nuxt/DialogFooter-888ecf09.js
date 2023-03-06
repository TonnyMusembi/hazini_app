import { mergeProps, useSSRContext, defineComponent, unref, withCtx, createVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Dialog, TransitionChild, DialogOverlay } from "@headlessui/vue";
import { _ as _export_sfc, d as defineStore } from "../server.mjs";
import "destr";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-50 rounded-full p-2 bg-white shadow-md cursor-pointer" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/CancelButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CancelButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const useDialogStore = defineStore("dialog-store", {
  state: () => ({
    showAddRoleDialog: false,
    showAddResourcesDialog: false,
    showEditPermissionDialog: false,
    showUpdateCompanyDialog: false,
    showUpdateBranchDialog: false,
    showDisableCompanyDialog: false,
    showDisableBranchDialog: false,
    showDisableUserDialog: false
  }),
  actions: {
    openAddRoleDialog() {
      this.showAddRoleDialog = true;
    },
    closeAddRoleDialog() {
      this.showAddRoleDialog = false;
    },
    openAddResourcesDialog() {
      this.showAddResourcesDialog = true;
    },
    closeAddResourcesDialog() {
      this.showAddResourcesDialog = false;
    },
    openEditPermissionDialog() {
      this.showEditPermissionDialog = true;
    },
    closeEditPermissionDialog() {
      this.showEditPermissionDialog = false;
    },
    openUpdateCompanyDialog() {
      this.showUpdateCompanyDialog = true;
    },
    closeUpdateCompanyDialog() {
      this.showUpdateCompanyDialog = false;
    },
    openUpdateBranchDialog() {
      this.showUpdateBranchDialog = true;
    },
    closeUpdateBranchDialog() {
      this.showUpdateBranchDialog = false;
    },
    openDisableCompanyDialog() {
      this.showDisableCompanyDialog = true;
    },
    closeDisableCompanyDialog() {
      this.showDisableCompanyDialog = false;
    },
    openDisableBranchDialog() {
      this.showDisableBranchDialog = true;
    },
    closeDisableBranchDialog() {
      this.showDisableBranchDialog = false;
    },
    openDisableUserDialog() {
      this.showDisableUserDialog = true;
    },
    closeDisableUserDialog() {
      this.showDisableUserDialog = false;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DialogComponent",
  __ssrInlineRender: true,
  props: {
    closeFunc: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Dialog), mergeProps({
        as: "div",
        class: "fixed z-10 inset-0 overflow-y-auto",
        onClose: __props.closeFunc
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TransitionChild), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="hidden sm:inline-block sm:align-middle sm:h-full" aria-hidden="true"${_scopeId}>​</span>`);
            _push2(ssrRenderComponent(unref(TransitionChild), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to": "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(CancelButton, {
                    onClick: __props.closeFunc,
                    class: "absolute -right-1 -top-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="bg-white"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" }, [
                      createVNode(CancelButton, {
                        onClick: __props.closeFunc,
                        class: "absolute -right-1 -top-1"
                      }, null, 8, ["onClick"]),
                      createVNode("div", { class: "bg-white" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                createVNode(unref(TransitionChild), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                  ]),
                  _: 1
                }),
                createVNode("span", {
                  class: "hidden sm:inline-block sm:align-middle sm:h-full",
                  "aria-hidden": "true"
                }, "​"),
                createVNode(unref(TransitionChild), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" }, [
                      createVNode(CancelButton, {
                        onClick: __props.closeFunc,
                        class: "absolute -right-1 -top-1"
                      }, null, 8, ["onClick"]),
                      createVNode("div", { class: "bg-white" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ])
                  ]),
                  _: 3
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/DialogComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialog/DialogFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _sfc_main$1 as _,
  __nuxt_component_4 as a,
  useDialogStore as u
};
//# sourceMappingURL=DialogFooter-888ecf09.js.map
