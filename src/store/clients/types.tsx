export type GetClient = {
  _id: string;
  name: string;
};

export type InitialState = {
  client: GetClient[];
};
