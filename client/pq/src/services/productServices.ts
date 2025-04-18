import { Product } from "@/types/types"
import axios from "axios"

export const fetchProducts = async (): Promise<Product[] | null> => {
  try {
    const res = await axios.get('http://localhost:5500/api/products/getAll')
    return res.data.products
  } catch (e) {
    console.error('Error fetching products:', e)
    return null
  }
}