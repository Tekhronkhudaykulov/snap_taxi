export type AdminInfo = {
  id: string;
  fullName: string;
  login: string;
  role: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialState = {
  adminInfo: AdminInfo | {};
};
