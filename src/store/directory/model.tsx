import { createModel } from "@rematch/core";
import { RootModel } from "../modals";
import { api } from "../../contants/API";
import { initialState } from "./state";
import {
  Color,
  GetBrandsType,
  GetColorByIdType,
  GetType,
  GetTypeByIdType,
} from "./types";
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
    setColorsById: (state, payload: GetColorByIdType) => {
      return {
        ...state,
        colorById: payload,
      };
    },
    setBrand: (state, payload: GetBrandsType[]) => {
      return {
        ...state,
        brand: payload,
      };
    },
    setBrandById: (state, payload: GetBrandsType) => {
      return {
        ...state,
        brandById: payload,
      };
    },
    setTypes: (state, payload: GetType[]) => {
      return {
        ...state,
        type: payload,
      };
    },
    setTypeById: (state, payload: GetTypeByIdType) => {
      return {
        ...state,
        typeById: payload,
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
    //get color by id
    async getColorById(id) {
      try {
        const { data } = await api.get(`car/color/${id}`);
        dispatch.Directory.setColorsById(data);
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
    // delete color by id
    async deleteColors(id) {
      try {
        const { data } = await api.delete(`car/color/${id}`);
      } catch (e) {
        alert(e);
      }
    },
    //add brands
    async addBrands(payload: any) {
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
        console.log(data.data);
      } catch (e) {
        alert(e);
      }
    },
    //get brands by Id
    async getBrandById(id) {
      try {
        const { data } = await api.get(`car/brand/${id}`);
        dispatch.Directory.setBrandById(data);
      } catch (e) {
        alert(e);
      }
    },
    //delete brand
    async deleteBrandId(id) {
      try {
        const { data } = await api.delete(`car/brand/${id}`);
      } catch (e) {
        alert(e);
      }
    },
    // get types
    async getTypes() {
      try {
        const { data } = await api.get("car/type");
        dispatch.Directory.setTypes(data.data);
      } catch (e) {
        alert(e);
      }
    },
    //get type by id
    async getTypesById(id) {
      try {
        const { data } = await api.get(`car/type/${id}`);
        dispatch.Directory.setTypeById(data);
      } catch (e) {
        alert(e);
      }
    },
    //delete type by id
    async deleteTypesById(id: string) {
      try {
        const { data } = await api.delete(`/car/type/${id}`);
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
