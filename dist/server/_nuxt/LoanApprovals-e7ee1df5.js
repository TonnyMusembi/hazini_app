import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheLoanApprovals",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    const select_all = ref(false);
    ref();
    const items = ref([
      { id: 101, name: "Item #1" },
      { id: 102, name: "Item #2" },
      { id: 103, name: "Item #3" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex justify-start text-xl"> Loan Approvals </div><br><div class="flex justify-end"><form class="mb-3 w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search loans.." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div></form></div><br><div class="overflow-x-auto relative shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 bg-gray-200"><tr class="divide-x divide-gray-300"><th scope="col" class="py-3 px-6"></th><th scope="col" class="p-4"><div class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(select_all)) ? ssrLooseContain(unref(select_all), null) : unref(select_all)) ? " checked" : ""}></div></th><th scope="col" class="py-3 px-6">Phone Number</th><th scope="col" class="py-3 px-6">Employee Name</th><th scope="col" class="py-3 px-6">Id Number</th><th scope="col" class="py-3 px-6">Payroll</th><th scope="col" class="py-3 px-6">Company Name</th><th scope="col" class="py-3 px-6">Branch Name</th><th scope="col" class="py-3 px-6">Assignment</th><th scope="col" class="py-3 px-6">Principal</th><th scope="col" class="py-3 px-6">Total Amount</th><th scope="col" class="py-3 px-6">Due Amount</th><th scope="col" class="py-3 px-6">Loan Status</th><th scope="col" class="py-3 px-6">Requested At</th><th scope="col" class="py-3 px-6">Due When</th></tr></thead><tbody class="divide-y"><!--[-->`);
      ssrRenderList(unref(items), (itm) => {
        _push(`<tr class="bg-white border-b divide-x hover:bg-teal-100 cursor-pointer"><td class="py-4 px-6">1</td><td class="w-4 p-4"><div class="flex items-center cursor-pointers"><input type="checkbox" class="checkbox"${ssrIncludeBooleanAttr(Array.isArray(itm.selected) ? ssrLooseContain(itm.selected, null) : itm.selected) ? " checked" : ""}><label for="checkbox-table-search-1" class="sr-only">checkbox</label></div></td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6">${ssrInterpolate(itm.id)}</td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Edit</a></td><td class="py-4 px-6"><a href="#" class="font-medium text-teal-600 hover:underline">Diactivate</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><br><div class="flex justify-end bottom-0 top-0"><button class="inline-flex rounded-lg text-sm font-semibold py-1 px-2 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">Approve</button></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLoanApprovals.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheLoanApprovals = _sfc_main$1;
  _push(ssrRenderComponent(_component_TheLoanApprovals, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/LoanApprovals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoanApprovals = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LoanApprovals as default
};
//# sourceMappingURL=LoanApprovals-e7ee1df5.js.map
