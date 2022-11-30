import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { api } from "../../contants/API";
import { initialState } from "./state";
import { Color, GetBrandsType, GetType } from "./types";
import { formData } from "../../contants/Formdata";

export const Directory = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setColors: (state, payload: Color[]) => {
      return {
        ...state,
        colorList: payload,
      };
    },
    setBrand: (state, payload: GetBrandsType[]) => {
      return {
        ...state,
        brand: payload,
      };
    },
    setTypes: (state, payload: GetType[]) => {
      return {
        ...state,
        type: payload,
      };
    },
  },
  effects: (dispatch) => ({
    //get colors
    async getColors() {
      try {
        const { data } = await api.get("car/color?page=1&perPage=20&limit=20");
        dispatch.Directory.setColors(data.data);
      } catch (e) {}
    },
    // add colors
    async addColors(payload) {
      try {
        const { data } = await api.post("car/color", payload);
      } catch (e) {
        alert(e);
      }
    },
    //add brands
    async addBrands(payload) {
      try {
        const { data } = await api.post("car/brand", formData(payload));
      } catch (e) {
        alert(e);
      }
    },
    //getBrand
    async getBrands() {
      try {
        const { data } = await api.get("car/brand");
        dispatch.Directory.setBrand(data.data);
      } catch (e) {
        alert(e);
      }
    },
    //get types
    async getTypes() {
      try {
        const { data } = await api.get("car/type");
        dispatch.Directory.setTypes(data.data);
      } catch (e) {
        alert(e);
      }
    },
    //add types
    async addTypes(payload) {
      try {
        const { data } = await api.post("car/type", payload);
      } catch (e) {
        alert(e);
      }
    },
  }),
});
