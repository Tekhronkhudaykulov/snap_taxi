import { Models } from "@rematch/core";
import { auth } from "./auth";
import { Directory } from "./directory";
import { orders } from "./orders";
import { RateModel } from "./rates";
import { Drivers } from "./drivers";
import { Clients } from "./clients";
import { other } from "./other";
import { Maps } from "./map";

export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
  orders: typeof orders;
  Directory: typeof Directory;
  RateModel: typeof RateModel;
  Drivers: typeof Drivers;
  Clients: typeof Clients;
  other: typeof other;
  Maps: typeof Maps;
}

export const models: RootModel = {
  auth,
  orders,
  Directory,
  RateModel,
  Drivers,
  Clients,
  other,
  Maps,
};
