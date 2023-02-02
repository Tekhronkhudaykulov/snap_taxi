export type Color = {
  _id: string;
  name: string;
  code: string;
};

export type GetBrandsType = {
  _id: string;
  name: string;
  logo: string;
};

export type GetType = {
  _id: string;
  name: string;
  brand: string;
};

export type GetTypeByIdType = {
  _id: string;
  name: string;
  brand: string;
};

export type GetColorByIdType = {
  _id: string;
  name: string;
  brand: string;
  code: any;
};
export type InitialState = {
  colorList: Color[];
  brand: GetBrandsType[];
  type: GetType[];
  brandById: GetBrandsType | null;
  typeById: GetTypeByIdType | null;
  colorById: GetColorByIdType | null;
};
