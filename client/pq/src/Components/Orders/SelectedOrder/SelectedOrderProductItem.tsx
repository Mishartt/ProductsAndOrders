import { deleteProductFromOrder } from "@/services/ordersService"
import { Product } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"

const SelectedOrderProduct: FC<{ product: Product | undefined; orderId: string }> = ({ product, orderId }) => {
    const router = useRouter()
    if (!product) return <></>

    const deleteProduct = async () => {
        console.log({ orderId, productId: product.id })
        await deleteProductFromOrder({ orderId, productId: product.id })
        router.refresh()
    }

    return (
        <div className="selected-order-product">
            <div className="selected-order-product__photo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg" alt="" />
            </div>
            <div className="selected-order-product__title">
                <p>{product.title}</p>
                <p className="selected-order-product__serial">{product.serialNumber}</p>
            </div>

            <div
                id={product.order === 1 ? "product-available" : "product-unavailable"}
                className="selected-order-product__availability"
            >
                {product.order === 1 ? "Свободен" : "В ремонте"}
            </div>

            <div onClick={deleteProduct} className="selected-order-product__delete">
                <Image
                    className="product-item__delete"
                    src="/assets/img/delete.png"
                    alt="Delete icon"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default SelectedOrderProduct
