import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { Driver } from "./types";
import { api } from "../../contants/API";

export const Drivers = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setDrivers: (state, payload: Driver[]) => {
      return {
        ...state,
        driverList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // get drivers
    async getDriversLoad() {
      try {
        const { data } = await api.get("driver?page=1&perPage=20&limit=20");
        dispatch.Drivers.setDrivers(data.data);
      } catch (e) {}
    },
  }),
});
