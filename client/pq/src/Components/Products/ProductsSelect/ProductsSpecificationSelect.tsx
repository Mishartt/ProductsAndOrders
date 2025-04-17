'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const ProductsSpecificationSelect = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentType = searchParams.get('specification') || '';
  
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedSpecification = e.target.value;
  
      const params = new URLSearchParams(searchParams.toString());
  
      if (selectedSpecification) {
        params.set('specification', selectedSpecification);
      } else {
        params.delete('specification');
      }
  
      router.push(`/products?${params.toString()}`);
    };
    
      return (
        <div className="products-select">
            <div style={{marginRight:'20px'}} className="">Спецификация</div>
          <select value={currentType} onChange={handleChange}>
            <option value="">All</option>
            <option value="DDR5, 6000MHz, CL36">DDR5, 6000MHz, CL36</option>
            <option value="Fully Modular, 80+ Gold">5Fully Modular, 80+ Gold</option>
          </select>
        </div>
      );
}


export default ProductsSpecificationSelect


