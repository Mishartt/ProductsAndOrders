'use client';

import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Order, Product } from "@/types/types";
import { setSelectedOrder } from "@/store/actions/actions";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import './orderItem.scss';
import DateDisplay from "@/Components/UI/DateDisplay/DateDisplay";
import DeleteOrderModal from "./DeleteOrderModal";

const OrderItem: FC<{ order: Order }> = ({ order }) => {
  const dispatch = useAppDispatch();
  const products:Product[]|[] = useSelector((state: any) => state.products);
  const selectedOrder = useSelector((state: any) => state.orders.selectedOrder);


  const open = () => {
    dispatch(setSelectedOrder(order));
  };



  const [isModalOpen,setIsModalOpen] = useState<boolean>(false)


  const calcIncome= useMemo(() => {
    let usd = 0
    let uah = 0

    if(!Array.isArray(products) || products.length < 1 ){
      return {usd:null,uah:null}
    }

    order.products.forEach(item => {
      const currProduct:Product|undefined = products.find(product => product.id == item)
      if(!currProduct){
        return
      }
      usd += currProduct?.price[0].value
      uah += currProduct?.price[1].value
      
    })
    return {usd,uah}
  },[order,products])



  return (
    <>
      <div className="order-item" id={selectedOrder ? 'order-item_compact' : ''}
    >
        <>
          <div className="order-item__name">{order.name}</div>

          <div className="order-item__products">
            <div onClick={open} className="order-item__more">
              <Image
                src="/assets/img/more.png"
                alt="More icon"
                width={17}
                height={17}
              />
            </div>
            <div className="order-item__products-count">
              <p>
                <span>{order.products.length}</span>
              </p>
              <p>Продукта</p>
            </div>
          </div>
            <DateDisplay date={order.createdAt}/>
          <div className="order-item__price">
              <p><span>{calcIncome.usd} USD</span></p>
              <p>{calcIncome.uah} UAH</p>
            </div>
          <div
            style={selectedOrder ? { visibility: "hidden" } : {}}
            className="order-item__delete"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/assets/img/delete.png"
              alt="Delete icon"
              width={35}
              height={35}
            />
          </div>
        </>

        {selectedOrder?.id == order.id && <div className="order-item__selected-icon">❯</div>}
    </div>
    {isModalOpen && <DeleteOrderModal productIds={order.products} orderId={order.id} setIsModalOpen={setIsModalOpen}/>}
    </>
  );
};

export default OrderItem;
