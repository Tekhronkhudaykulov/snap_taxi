export type Map = {
  id: string;
  title: string;
  polygon: {
    type: string;
    coordinates: [];
  };
};

export type InitialState = {
  region: Map[];
};
