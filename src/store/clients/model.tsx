import { createModel } from "@rematch/core";
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
  effects: (dispatch) => ({}),
});
