import axios from 'axios'
import { Order } from '@/types/types'

export const fetchOrders = async (): Promise<Order[] | null> => {
  try {
    const res = await axios.get('http://localhost:5500/api/orders/getAll')
    return res.data.orders
  } catch (e) {
    console.error('Error fetching orders:', e)
    return null
  }
}


export const deleteProductFromOrder = async ({orderId,productId}:{orderId:string,productId:string}) => {  
  const res = await axios.post('http://localhost:5500/api/orders/deleteProductFromOrder',{orderId,productId}).then(resp => resp.data)
  return res
}



export const deleteOrder = async (orderId:string) => {  
  const resp = await axios.delete(`http://localhost:5500/api/orders/deleteOrder/${orderId}`).then(resp => resp.data)
  return resp
}

export const resetAll = async () => {
  await axios.get('http://localhost:5500/api/orders/resetAll')
}