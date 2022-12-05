import { Models } from "@rematch/core";
import { auth } from "./auth";
import { Directory } from "./directory";
import { orders } from "./orders";
import { RateModel } from "./rates";

export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
  orders: typeof orders;
  Directory: typeof Directory;
  RateModel: typeof RateModel;
}

export const models: RootModel = {
  auth,
  orders,
  Directory,
  RateModel,
};
