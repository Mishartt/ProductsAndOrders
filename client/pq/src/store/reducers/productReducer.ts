import { Order, Product } from "@/types/types";
import { AppActions } from "../actions/actions";


const initialState: Product[] = []


const productsReducer = (state: Product[] = initialState, action: AppActions): Product[] => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
   
    default:
      return state;
  }
};

export default productsReducer;
