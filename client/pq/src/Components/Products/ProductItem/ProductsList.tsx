'use client'

import { Order, Product } from "@/types/types"
import { FC, useEffect } from "react"
import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setOrders } from "@/store/actions/actions"
import { fetchOrders } from "@/services/ordersService"
import { getOrderNameByProductId } from "@/store/selectors/ordersSelectors"

const ProductsList:FC<{products:Product[]}> = ({ products }) => {
    const dispatch = useAppDispatch()
    const orders:Order[]|null = useSelector((state: any) => state.orders.orders)

    useEffect(() => {
        const fetchAndDispatch = async () => {
            if (!orders) {
                const fetchedOrders = await fetchOrders()
                console.log(fetchedOrders)
                if (fetchedOrders) {
                    dispatch(setOrders(fetchedOrders))
                }
            }
        }

        fetchAndDispatch()
    }, [orders])

    return (
        <div className="products-page__list">
            {products.map((product:Product) => (
                <ProductItem orderName={orders ? getOrderNameByProductId(orders, product.id) : 'loading'} key={product.id} product={product} />
            ))}
        </div>
    )
}


export default ProductsList
