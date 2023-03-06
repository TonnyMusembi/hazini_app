import { d as defineStore } from "../server.mjs";
import "vue";
import { a as useFetch } from "./login-5863c907.js";
import "destr";
const useUpdateRoleStore = defineStore("update-role-store", {
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
    async updateRole(body, accessToken, roleID) {
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
        const { data } = await useFetch("/api/roles/update", {
          method: "put",
          body: { body, accessToken, roleID },
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
            if (response.status == 401) {
              error = {
                hasError: true,
                message: "you are not authorised to perform that action",
                field: "none"
              };
            }
            if (response.status === 403) {
              error = {
                hasError: true,
                message: "Role or permission name already exists",
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
        }, "$2x3MN7ibwJ");
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
export {
  useUpdateRoleStore as u
};
//# sourceMappingURL=update-role-bbafe1fb.js.map
