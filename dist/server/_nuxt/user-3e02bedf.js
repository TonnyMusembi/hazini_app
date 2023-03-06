import { d as defineStore } from "../server.mjs";
import "vue";
import "destr";
const useUserStore = defineStore("users-store", {
  state: () => ({
    selectedUser: null
  }),
  actions: {
    setSelectedUser(payload) {
      console.log(payload);
      this.selectedUser = payload;
    }
  },
  persist: true
});
export {
  useUserStore as u
};
//# sourceMappingURL=user-3e02bedf.js.map
