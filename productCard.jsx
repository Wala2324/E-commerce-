import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router';

const ProductCard = ({ image, name, price, salePrice, _id }) => {
  return (
    <Link to={`/product/${_id}`} className="w-[369px] p-4 bg-white">
      <img 
        src={image} 
        alt={name}
        className="w-64 h-auto object-contain bg-gray-100"
      />
      <div className="mt-3 flex justify-between items-center">
        <div>
          <h3 className="text-base font-normal text-gray-800">{name}</h3>
          <div className="flex gap-2 mt-1">
            {salePrice && <span className="text-gray-600">${salePrice.toFixed(2)}</span>}
            <span className={`${salePrice ? 'line-through text-gray-400' : 'text-gray-600'}`}>
              ${price}
            </span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <FiShoppingCart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;