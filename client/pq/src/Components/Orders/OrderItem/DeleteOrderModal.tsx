import { FC } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { deleteOrder } from "@/services/ordersService"
import ProductItemForModal from "./ProductItemForModal"
import { Product } from "@/types/types"

interface DeleteOrderModalProps {
  orderId: string
  setIsModalOpen: (status: boolean) => void
  productIds: string[]
}

const DeleteOrderModal: FC<DeleteOrderModalProps> = ({ orderId, setIsModalOpen, productIds }) => {
  const router = useRouter()
  const products: Product[] | null = useSelector((state: any) => state.products)

  const delOrder = async () => {
    await deleteOrder(orderId)
    router.refresh()
  }

  return (
    <div className="delete-order-modal">
      <div className="delete-order-modal__container">
        <div
          onClick={() => setIsModalOpen(false)}
          className="delete-order-modal__container__close"
          aria-label="Close Modal"
        >
          X
        </div>

        <div className="delete-order-modal__container__text">
          <h2>Вы уверены, что хотите удалить этот приход?</h2>
        </div>

        <div className="delete-order-modal__container__products">
          {productIds.map(productItemId => {
            const product = products?.find(prod => prod.id === productItemId)
            return (
              <ProductItemForModal key={productItemId} product={product} />
            )
          })}
        </div>

        <div className="delete-order-modal__container__products-product-btns">
          <div
            onClick={() => setIsModalOpen(false)}
            className="delete-order-modal__container__products-product-btns__cancel"
          >
            ОТМЕНИТЬ
          </div>
          <div
            onClick={delOrder}
            className="delete-order-modal__container__products-product-btns__delete"
          >
            УДАЛИТЬ
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteOrderModal
