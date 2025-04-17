import axios from 'axios'
import './productsPage.scss'
import { Product } from '@/types/types'
import ProductItem from '@/Components/Products/ProductItem/ProductItem'
import ProductsList from '@/Components/Products/ProductItem/ProductsList'
import { Metadata } from 'next'
import ProductsTypeSelect from '@/Components/Products/ProductsSelect/ProductsTypeSelect'
import ProductsSpecificationSelect from '@/Components/Products/ProductsSelect/ProductsSpecificationSelect'
const fetchProducts = async (filterType?: string,filterSpecification?:string): Promise<Product[] | null> => {
    try {
      const response = await axios.get('http://backend:5500/api/products/getAll', {
        params: { type: filterType ,specification:filterSpecification}
      });
      return response.data.products;
    } catch (e) {
      console.error(e);
      return null;
    }
  };


  export const metadata: Metadata = {
    title: 'Products'
  }
  


const ProductsPage = async({ searchParams }:any) => {
    const type = searchParams?.type;
    const specification = searchParams?.specification;

    const products:Product[]|null = await fetchProducts(type,specification);
    
    
    if(!products){
        return (
            <div className="products-page">
                <div className="products-page__container">
                    <div className="products-page__toolbar">
                        <h2>ПРОДУКТЫ / 0</h2>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="products-page">
            <div className="products-page__container">
                <div className="products-page__toolbar">
                    <h2>ПРОДУКТЫ / {products.length}</h2>
                    <ProductsTypeSelect />
                    <ProductsSpecificationSelect/>
                </div>
                <ProductsList products={products}/>
            </div>
        </div>
    )
}

export default ProductsPage