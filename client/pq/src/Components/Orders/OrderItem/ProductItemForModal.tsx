import { Product } from "@/types/types"
import { FC } from "react"

const ProductItemForModal:FC<{product:Product|undefined}> = ({product}) => {

    if(!product){
        return(<div className="delete-order-modal__container__products-product"><p>Product not found</p></div>)
    }

    return(
        <div className="delete-order-modal__container__products-product">
            <div id={product.order == 1 ? 'modal-poduct_available' : 'modal-poduct_unavailable'} className="delete-order-modal__container__products-product__availability"></div>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg'} alt="" />
            <div className="delete-order-modal__container__products-product__title">
                <p>{product.title}</p>
                <p><span> {product.serialNumber}</span></p>
            </div>
        </div>
    )
}

export default ProductItemForModal