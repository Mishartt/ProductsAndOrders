'use client'

import { useEffect } from 'react'
import { Product } from '@/types/types'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setProducts } from '@/store/actions/actions'

type Props = {
  products: Product[]
}

const ProductsDispatcher = ({ products }: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
  }, [dispatch, products])

  return null
}

export default ProductsDispatcher
