import { Order } from "@/types/types";
import { AppActions } from "../actions/actions";

// Определим тип состояния для заказов
export interface OrdersState {
  orders: Order[] | null;
  selectedOrder: Order | null;
}

// Начальное состояние
const initialState: OrdersState = {
  orders: null,
  selectedOrder: null,
};

const ordersReducer = (state: OrdersState = initialState, action: AppActions): OrdersState => {
  switch (action.type) {
    case 'SET_ORDERS':
      const newOrders = action.payload;
      const currentSelectedId = state.selectedOrder?.id;

      const updatedSelectedOrder = currentSelectedId
        ? newOrders.find(order => order.id === currentSelectedId) || null
        : null;

      return {
        ...state,
        orders: newOrders,
        selectedOrder: updatedSelectedOrder,
      };
      
    case 'SET_SELECTED_ORDER':
      return {
        ...state,
        selectedOrder: action.payload 
      };
    default:
      return state;
  }
};

export default ordersReducer;
