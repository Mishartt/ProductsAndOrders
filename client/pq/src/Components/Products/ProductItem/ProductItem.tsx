'use client'
import { FC, useMemo } from 'react'
import './ProductItem.scss'
import { Product } from '@/types/types'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DateDisplay from '@/Components/UI/DateDisplay/DateDisplay';

const ProductItem: FC<{ product: Product ,orderName:string}> = ({ product,orderName }) => {
    const router = useRouter()
    
    const orders = useSelector((state: any) => state.orders.orders);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = String(date.getFullYear());
        return `${day}/${month}/${year}`;
    };
    
    const startGuarantee = useMemo(() => {
        return formatDate(product.guarantee.start)
    },[product.guarantee.start])


    const endGuarantee = useMemo(() => {
        return formatDate(product.guarantee.end)
    },[product.guarantee.end])
    
    const deleteProduct = async() => {
       try{
        const resp = await axios.delete(`http://localhost:5500/api/products/deleteProduct/${product.id}`).then(resp => console.log(resp.data))
        await router.refresh()
       }catch(e){
        console.log(e)
       }
    }

    return(
        <div className="product-item">
            <div className={`product-item__status_${product.order == 1 ? 'available' : 'unavailable'}`}></div>
                <div className="product-item__photo">
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg'} alt="" />
                </div>

                <div className="product-item-name">
                    <div className="product-item-name__name">{product.title} {product.title} {product.title}</div>

                    <div className="product-item-name__serial">{product.serialNumber}</div>
                </div>

                <div className={`product-item-availability_${product.order == 1 ? 'available' : 'unavailable'}`}>
                    {product.order == 1 ? 'свободен' : 'В ремонте'}
                </div>

                <div className="product-item-date">
                    <p>с  <span>{startGuarantee}</span></p>
                    <p>по <span>{endGuarantee}</span></p>
                </div>

                <div className="product-item-isNew">
                    {product.isNew ? 'новый' : 'Б/У'}
                </div>

                <div className="product-item-price">
                    <p className='product-item-price__usd'>{product.price[0]?.value}$</p>
                    <p className='product-item-price__uah'>{product.price[1]?.value} {product.price[1]?.symbol}</p>
                </div>

                <div className="product-item-group">
                    <p>{product.type}</p>
                </div>

                <div className="product-item-specification">
                    <p>{product.specification}</p>
                </div>

                <div className="product-item-date2">
                    <DateDisplay date={product.date}/>
                </div>                

                <div className="product-item-order">
                    {orderName}
                </div>
                
             <Image onClick={deleteProduct} className='product-item__delete' src="/assets/img/delete.png" alt="Delete icon" width={20} height={20}/>
        </div>
    )
}
  

export default ProductItem