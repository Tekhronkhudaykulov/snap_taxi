import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { AdminInfo } from "./types";
import { api } from "../../contants/API";

export const auth = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setAdminInfo: (state, payload: AdminInfo) => {
      return {
        ...state,
        adminInfo: payload,
      };
    },
  },
  effects: (dispatch) => ({
    //auth
    async authLoad(payload) {
      try {
        api.defaults.headers.common["Authorization"] = null;
        const { data } = await api.post("admin/login", payload);
        localStorage.setItem("@token", data.token);
        setAuthHeader("@token");
      } catch (e) {}
    },
    //get admin info
    async getAdminInfo() {
      try {
        const { data } = await api.get("admin/profile");
        dispatch.auth.setAdminInfo(data);
      } catch (e) {}
    },
  }),
});

export const setAuthHeader = (key: string) => {
  const token = localStorage.getItem(key);
  if (!token) {
    throw Error("Token not exist");
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
