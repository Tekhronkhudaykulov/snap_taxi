import { createModel } from "@rematch/core";
import { api } from "../../contants/API";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { GetClient } from "./types";

export const Clients = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setClients: (state, payload: GetClient[]) => {
      return {
        ...state,
        client: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getClient() {
      try {
        const { data } = await api.get("clients?page=1&perPage=20&limit=20");
        dispatch.Clients.setClients(data.data);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
