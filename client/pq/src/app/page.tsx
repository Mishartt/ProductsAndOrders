export const dynamic = 'force-dynamic'
import { Order } from '@/types/types'
import './OrdersPage.scss'
import Orderitem from '@/Components/Orders/OrderItem/OrderItem'
import SelectedOrder from '@/Components/Orders/SelectedOrder/SelectedOrder'
import OrdersDispatcher from '@/Components/Orders/OrdersDispatcher'
import { Metadata } from 'next'
import AddOrderBtn from '@/Components/Orders/AddOrderBtn'
import axios from 'axios'

const fetchOrders = async ():Promise<Order[]|null> => {
  try{
      const orders:Order[]|null = await axios.get('http://backend:5500/api/orders/getAll').then(resp => resp.data.orders)
      console.log(orders)
      return orders
  }catch(e){  
      console.log(e)
      return null
  }
}

export const metadata :Metadata = {
      title:'Orders'
}




const OrdersPage = async () => {
  const orders = await fetchOrders()

  if(!orders){
    return(
      <div className="orders-page">
          <div className="orders-page__container">
            <div className="orders-page__toolbar">
                  {/* <div className="orders-page__toolbar__add-btn">+</div> */}
                  <AddOrderBtn/>
                  <h2>ПРИХОДЫ / 0</h2>
                  {orders}
            </div>
          </div>
      </div>
    ) 
    
  }

  return (
    <div className="orders-page">
      <OrdersDispatcher orders={orders}/>
        <div className="orders-page__container">
            <div className="orders-page__toolbar">
                  {/* <div className="orders-page__toolbar__add-btn">+</div> */}
                  <AddOrderBtn/>
                  <h2>ПРИХОДЫ / {orders.length}</h2>
            </div>

            <div className="orders-page__list-wrapper">
              <div className="orders-page__list">
                {orders.map((order:Order) => (
                  <Orderitem key={order.id} order={order}/>
                ))}
              </div>
              <SelectedOrder/>
            </div>
        </div>
    </div>
  );
}

export default OrdersPage