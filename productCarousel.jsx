import React, { useState } from 'react';

const ProductCarousel = ({ images=[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Main large image */}
      <div className="w-full h-[430px] mb-4 overflow-hidden">
        <img 
          src={images?.[selectedImage]} 
          alt={`Product view ${selectedImage + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail images */}
      <div className="flex gap-2 justify-center">
        {images.map((image, index) => (
          <div 
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              w-20 h-20 cursor-pointer overflow-hidden rounded-md
              ${selectedImage === index 
                ? 'ring-2 ring-blue-500' 
                : 'hover:opacity-75 transition-opacity'
              }
            `}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;