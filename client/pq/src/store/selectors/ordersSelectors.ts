// selectors/ordersSelectors.ts
import { Order } from "@/types/types";

export const getOrderNameByProductId = (orders: Order[], productId: string): string  => {
  const order = orders ? orders.find(o => o.products.includes(productId)) : null;
  return order ? order.name : 'not ffound';
};
