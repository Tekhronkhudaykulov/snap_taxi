export type GetClient = {
  _id: string;
  name: string;
  user: {
    phone: string;
    role: string;
  };
};

export type InitialState = {
  client: GetClient[];
};
