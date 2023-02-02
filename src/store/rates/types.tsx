export type Rates = {
  _id: string;
  title: string;
  minPrice: string;
  pricePerKm: string;
  pricePerMin: string;
  icon: string;
  commission: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialState = {
  Rates: Rates[];
};
