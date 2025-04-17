'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setOrders } from '@/store/actions/actions';
import { Order } from '@/types/types';

interface OrdersDispatcherProps {
  orders: Order[];
}

const OrdersDispatcher = ({ orders }: OrdersDispatcherProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOrders(orders));
  }, [dispatch, orders]);

  return null; 
};

export default OrdersDispatcher;
