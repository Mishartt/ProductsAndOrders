// actions.ts
import { Order, Product } from '@/types/types';

export const SET_ORDERS = 'SET_ORDERS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SELECTED_ORDER = 'SET_SELECTED_ORDER'

interface SetOrdersAction {
  type: typeof SET_ORDERS;
  payload: Order[];
}

interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: Product[];
}


interface setSelectedOrder{
  type: typeof SET_SELECTED_ORDER;
  payload: Order | null;
}

export type AppActions = SetOrdersAction | SetProductsAction | setSelectedOrder;

export const setOrders = (orders: Order[]): SetOrdersAction => ({
  type: SET_ORDERS,
  payload: orders,
});

export const setProducts = (products: Product[]): SetProductsAction => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setSelectedOrder = (order: Order | null): setSelectedOrder => ({
  type: 'SET_SELECTED_ORDER',
  payload: order,
});
