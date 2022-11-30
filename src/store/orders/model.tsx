import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { Orders } from "./types";
import { api } from "../../contants/API";

export const orders = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setOrders: (state, payload: Orders[]) => {
      return {
        ...state,
        orders: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // get orders
    async getOrdersLoad() {
      try {
        const { data } = await api.get("orders?page=1&perPage=10");
        dispatch.orders.setOrders(data.data);
      } catch (e) {}
    },
  }),
});
