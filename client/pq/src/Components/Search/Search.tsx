'use client';

import { FC, memo, useState, useMemo, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '@/types/types';
import './Search.scss';

const Search: FC = () => {
  const products: Product[] | null = useSelector((state: any) => state.products);
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredProducts = useMemo(() => {
    if (!products || !searchValue.trim()) return [];
    const lower = searchValue.toLowerCase();
    return products.filter(p =>
      p.title.toLowerCase().includes(lower)
    );
  }, [products, searchValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const showResults = searchValue.trim().length > 0;

  return (
    <div className="header-search-wrapper">
      <input
        value={searchValue}
        onChange={handleChange}
        className="header-search__input"
        type="text"
        placeholder="Поиск..."
      />

      {showResults && (
        <div className="header-search-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(productItem => (
              <div
                key={productItem.id}
                className="header-search-list__item"
              >
                {productItem.title}
              </div>
            ))
          ) : (
            <div className="header-search-list__item empty">
              Ничего не найдено
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Search);
