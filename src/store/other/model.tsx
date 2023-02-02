import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";

export const other = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setModal: (state, payload: boolean) => {
      return {
        ...state,
        Modal: payload,
      };
    },
    setShow: (state, payload: boolean) => {
      return {
        ...state,
        show: payload,
      };
    },
    setShowForBrand: (state, payload: boolean) => {
      return {
        ...state,
        showForBrand: payload,
      };
    },
    setShowForType: (state, payload: boolean) => {
      return {
        ...state,
        showForType: payload,
      };
    },
    setShowForColor: (state, payload: boolean) => {
      return {
        ...state,
        showColor: payload,
      };
    },
  },
  effects: (dispatch) => ({}),
});
