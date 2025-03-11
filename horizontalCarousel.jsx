import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from './productCard';

const HorizontalCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(products.length - itemsPerPage, 0) : prevIndex - itemsPerPage
    );
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100/itemsPerPage)}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-[33.333%] px-2">
              <ProductCard
                image={product.images?.[0]}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                _id={product._id}
              />
            </div>
          ))}
        </div>
      </div>

      {products.length > itemsPerPage && (
        <>
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-gray-800'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalCarousel;