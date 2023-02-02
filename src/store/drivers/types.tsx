export type Driver = {
  id: string;
  name: string;
  addres: string;
  car: {
    type: {
      name: string;
    };
  };
  user: {
    phone: string;
    birthday: string | number;
  };
};

export type InitialState = {
  driverList: Driver[];
};
