type Guarantee = {
  start: string; // ISO date string
  end: string;
};

type Price = {
  value: number;
  symbol: string;
  isDefault: 0 | 1;
};

export type Product = {
  id: string;
  serialNumber: string;
  isNew: 0 | 1;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
};


export type Order = {
  id: string;
  name: string;
  createdAt: string;
  products: string[];
};