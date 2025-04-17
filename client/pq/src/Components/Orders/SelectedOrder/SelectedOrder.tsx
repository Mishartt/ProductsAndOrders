'use client'

import { useSelector } from "react-redux";
import SelectedOrderProductItem from "./SelectedOrderProductItem";
import { Product } from "@/types/types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setSelectedOrder } from "@/store/actions/actions";
import { RootState } from "@/store/reducers/rootReducer";

const SelectedOrder = () => {
    const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);
    const products = useSelector((state: RootState) => state.products);
    
    const dispatch = useAppDispatch()
    

    if(!selectedOrder){
        return<></>
    }

    return (
        <div className="selected-order">
           <div onClick={() => dispatch(setSelectedOrder(null))} className="selected-order__hide-btn">X</div>
           <div className="selected-order__title">
               <h2>{selectedOrder.name}</h2>
           </div>

           <div className="selected-order__products">
                {selectedOrder.products.map((product:string) => (
                    <SelectedOrderProductItem orderId={selectedOrder.id} product={products.find((p: Product) => p.id == product)} key={product}/>
                ))}
            </div>
        </div>
    )
}

export default SelectedOrder