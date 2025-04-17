'use client';
import './ProductTypeSelect.scss'
import { ChangeEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// import './ProductsTypeSelect.scss'; 

const ProductsTypeSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get('type') || '';

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (selectedType) {
      params.set('type', selectedType);
    } else {
      params.delete('type');
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="products-select">
        <div style={{marginRight:'20px'}} className="">Тип</div>
      <select value={currentType} onChange={handleChange}>
        <option value="">All</option>
        <option value="Monitors">Monitors</option>
        <option value="Storage">Storage</option>
      </select>
    </div>
  );
};

export default ProductsTypeSelect;

