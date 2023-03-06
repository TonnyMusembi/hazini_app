import { _ as __nuxt_component_0 } from "./Spin-091d23d7.js";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { u as useAuthStore, a as useFetch } from "./login-5863c907.js";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
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
const useCreateUsersBulkStore = defineStore("create-users-bulk-store", {
  state: () => ({
    pending: false,
    error: "",
    responseOK: false,
    results: null
  }),
  actions: {
    async createUsersBulk(body, accessToken) {
      try {
        this.pending = true;
        this.results = null;
        const { data } = await axios({
          method: "post",
          // url: "http://localhost:8080/users/bulk",
          url: "https://dev.hazini.com/users/bulk",
          data: body,
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        this.pending = false;
        this.results = data;
      } catch (error) {
        this.pending = false;
        if (error.response.status === 400) {
          this.error = "The file provided is not a valid CSV file";
        }
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddUsersBulk",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref();
    useCreateUsersBulkStore();
    const { user } = storeToRefs(useAuthStore());
    const { pending, error, results } = storeToRefs(useCreateUsersBulkStore());
    const {
      data: companies,
      pending: fetchCompaniesIsPending,
      error: fetchCompaniesHasError,
      refresh: refreshCompanies
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/company/list", {
      query: {
        pageSize: 10,
        pageID: 1,
        accessToken: user.value.refresh_token
      }
    }, "$4yq6cJUFcF")), __temp = await __temp, __restore(), __temp);
    ref(null);
    ref("Add Users from CSV file");
    refreshCompanies();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-md p-5 bg-white" }, _attrs))}><div class="flex justify-start text-xl"> Add Bulk Users </div><br><form class="w-full"><p class="text-sm font-semibold">Download this <a href="#" class="text-teal-800 underline hover:underline">Csv Form</a> ,fill the list with users and upload them. </p><br><div class="mb-3"><label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Select Company</label><select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><!--[-->`);
      ssrRenderList(unref(companies), (company) => {
        _push(`<option${ssrRenderAttr("value", company.id)}>${ssrInterpolate(company.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-3"><label for="users-CSV" class="block text-sm font-semibold leading-6 text-gray-900">Users CSV *</label><input type="file" id="users-CSV" class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required></div>`);
      if (unref(results)) {
        _push(`<div class="text-sm space-y-3 mb-3"><div class="border border-teal-300 bg-teal-100 p-4"><p class="text-green-500"> Records saved:${ssrInterpolate(unref(results).results.total_inserted)}</p><p class="text-red-500"> Records failed:${ssrInterpolate(unref(results).results.total_failed)}</p><p class="text-gray-700"> Total Records :${ssrInterpolate(unref(results).results.total_records)}</p></div>`);
        if (unref(results).errors.length) {
          _push(`<div class="border border-red-300 bg-red-50 p-4 space-y-3"><!--[-->`);
          ssrRenderList(unref(results).errors, (error2) => {
            _push(`<div class="text-red-400"><p class="flex space-x-4"><span>Row Number: ${ssrInterpolate(error2.row)}</span><span> Column Name: ${ssrInterpolate(error2.column)}</span></p> Description:${ssrInterpolate(error2.description)}</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-sm text-red-500">${ssrInterpolate(unref(error))}</p><button type="submit" class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-cyan-600 hover:text-sky-50/80 hover:bg-cyan-400">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_Spin, null, null, _parent));
      } else {
        _push(`<span>Add Users</span>`);
      }
      _push(`</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddUsersBulk.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AddUsersBulk = _sfc_main$1;
  _push(ssrRenderComponent(_component_AddUsersBulk, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/AddBulk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddBulk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AddBulk as default
};
//# sourceMappingURL=AddBulk-4c2e061f.js.map
