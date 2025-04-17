import { combineReducers, createStore } from "redux";
import ordersReducer from "./ordersReducer";
import productsReducer from "./productReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer
  });



export const store = createStore(
    rootReducer,
);


export type RootState = ReturnType<typeof rootReducer>;
