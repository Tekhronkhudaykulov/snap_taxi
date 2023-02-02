import { createModel } from "@rematch/core";
import { api } from "../../contants/API";
import { formData } from "../../contants/Formdata";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { Rates } from "./types";

export const RateModel = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setRates: (state, payload: Rates[]) => {
      return {
        ...state,
        Rates: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // add rate
    async addRateLoad(payload) {
      try {
        const { data } = await api.post("rates", formData(payload));
      } catch (e) {}
    },
    //get rates
    async getRatesLoad() {
      try {
        const { data } = await api.get("rates");
        dispatch.RateModel.setRates(data);
      } catch (e) {
        console.log(e);
      }
    },
  }),
});
