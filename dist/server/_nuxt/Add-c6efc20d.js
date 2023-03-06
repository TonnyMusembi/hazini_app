import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, unref, useSSRContext } from "vue";
import { a as useFetch, u as useAuthStore } from "./login-5863c907.js";
import "destr";
import { ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { f as fieldHasError, g as getErrorByField } from "./errors-9a2b81c2.js";
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
const useCreateBranchStore = defineStore("create-branch-store", {
  state: () => ({
    pending: false,
    responseOK: false,
    nonFieldErrors: "",
    fieldErrors: null
  }),
  actions: {
    async createBranch(body, accessToken) {
      try {
        this.pending = true;
        let nonFieldErrors = "";
        let fieldErrors = null;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/branch/create", {
          method: "post",
          body: { body, accessToken },
          async onResponse({ request, response, options }) {
            if (response.ok) {
              responseOK = true;
            }
          },
          async onResponseError({ request, response, options }) {
            var _a, _b;
            if (response.status == 400) {
              fieldErrors = (_a = response._data) == null ? void 0 : _a.data.errors;
            }
            if (response.status == 401) {
              nonFieldErrors = "Unauthorised";
            }
            if (response.status === 403) {
              nonFieldErrors = (_b = response._data) == null ? void 0 : _b.data.error;
            }
            if (response.status === 500) {
              nonFieldErrors = "Internal Error";
            }
          }
        }, "$9wfrxeemxJ");
        this.pending = false;
        this.fieldErrors = fieldErrors;
        this.nonFieldErrors = nonFieldErrors;
        this.responseOK = responseOK;
      } catch (err) {
        this.pending = false;
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddBranch",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCreateBranchStore();
    const {
      pending: addBranchIsPending,
      responseOK,
      nonFieldErrors,
      fieldErrors
    } = storeToRefs(useCreateBranchStore());
    const { user } = storeToRefs(useAuthStore());
    const {
      data: companies,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/company/list", {
      query: {
        pageSize: 10,
        pageID: 1,
        accessToken: user.value.refresh_token
      }
    }, "$pyZtxiPdLl")), __temp = await __temp, __restore(), __temp);
    const name = ref("");
    const physicalAddress = ref("");
    const numberOfEmployees = ref(0);
    ref(1);
    ref(0);
    ref("Add Company");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spin = __nuxt_component_0;
      _push(`<!--[--><div class="flex items-start text-xl"> Add Branch </div><br><div class="shadow-md p-5 bg-white"><form class="w-full"><div class="mb-3"><label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Select Company</label><select id="company" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "CompanyID"
        )
      }, "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"])}"><!--[-->`);
      ssrRenderList(unref(companies), (company) => {
        _push(`<option${ssrRenderAttr("value", company.id)}>${ssrInterpolate(company.name)}</option>`);
      });
      _push(`<!--]--></select><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "CompanyID"))}</p></div><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(unref(fieldErrors), "Name")
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"])}" required><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "Name"))}</p></div><div class="mb-3"><label for="physical-address" class="block text-sm font-semibold leading-6 text-gray-900">Physical Address</label><input type="text" id="physical-address" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "PhysicalAddress"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(physicalAddress))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "PhysicalAddress"))}</p></div><div class="mb-3"><label for="number-of-mployees" class="block text-sm font-semibold leading-6 text-gray-900">Number of Employees</label><input type="number" id="number-of-employees" class="${ssrRenderClass([{
        "ring-1 ring-red-500 bg-red-50": unref(fieldHasError)(
          unref(fieldErrors),
          "NumberOfEmployees"
        )
      }, "appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"])}" aria-required${ssrRenderAttr("value", unref(numberOfEmployees))}><p class="text-red-500 mb-6 text-sm">${ssrInterpolate(unref(getErrorByField)(unref(fieldErrors), "NumberOfEmployees"))}</p></div><p class="text-red-500 mb-6">${ssrInterpolate(unref(nonFieldErrors))}</p><button type="submit" class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600">`);
      if (unref(addBranchIsPending)) {
        _push(ssrRenderComponent(_component_spin, null, null, _parent));
      } else {
        _push(`<span>Add Branch</span>`);
      }
      _push(`</button></form></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddBranch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AddBranch = _sfc_main$1;
  _push(ssrRenderComponent(_component_AddBranch, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/branches/Add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Add as default
};
//# sourceMappingURL=Add-c6efc20d.js.map
