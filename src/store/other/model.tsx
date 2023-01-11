import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { initialState } from "./state";
import { Modal } from "./types";

export const other = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setModal: (state, payload: Modal) => {
      return {
        ...state,
        Modal: payload,
      };
    },
    setShow: (state, payload: Modal) => {
      return {
        ...state,
        show: payload,
      };
    },
    setShowForBrand: (state, payload: Modal) => {
      return {
        ...state,
        showForBrand: payload,
      };
    },
    setShowForType: (state, payload: Modal) => {
      return {
        ...state,
        showForType: payload,
      };
    },
    setShowForColor: (state, payload: Modal) => {
      return {
        ...state,
        showColor: payload,
      };
    },
  },
  effects: (dispatch) => ({}),
});
