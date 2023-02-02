import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { api } from "../../contants/API";
import { Map } from "./types";

export const Maps = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setPolygon: (state, payload: Map[]) => {
      return {
        ...state,
        region: payload,
      };
    },
  },
  effects: (dispatch) => ({
    //add polygon
    async addPolygon(payload) {
      try {
        const { data } = await api.post("regions", payload);
      } catch (e) {}
    },

    //get polygon list
    async getPolygon() {
      try {
        const { data } = await api.get("regions");
        dispatch.Maps.setPolygon(data);
      } catch (e) {}
    },
  }),
});
