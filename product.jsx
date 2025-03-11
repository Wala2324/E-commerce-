import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import ProductCarousel from '../component/productCarousel'
import ProductCard from '../component/productCard'


import { useProduct } from '../context/productContext';
import { getProductById } from '../service'
import { useCart } from '../context/cartContext';

const Product = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

  

  const getProduct = async () => {
    const res = await getProductById(id);
    setProduct(res);
    setRelatedProducts(products.filter((product) => product.category === res.category));
    console.log(relatedProducts,products,'  products, dsfdsfsdfdsf',res.category);
  } 

  useEffect(() => {
    getProduct();
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images?.[0],
      quantity: quantity
    });
  };

  return (
    <>
    <Navbar />
    <section>
    <div className="relative h-[20vh] flex items-center justify-center bg-fixed bg-center bg-contain" 
           style={{backgroundImage: "url('/1920x300.svg')"}}>
      </div>
    </section>
    <section>
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <ProductCarousel images={product.images} />
                </div>
                <div className="md:w-1/2 mt-10">
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    {/* <p className="text-gray-600 text-sm mb-4">{}</p> */}
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            {'★'.repeat(5)}
                        </div>
                        <span className="text-gray-600">(5 Reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold mb-4">${product.price}</div>

                    {/* Size selector */}
                    <div className="mb-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button 
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-black"
                                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                >
                                    -
                                </button>
                                <input 
                                    type="text" 
                                    value={quantity} 
                                    className="w-12 text-center border border-gray-300 rounded"
                                    readOnly 
                                />
                                <button 
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-black"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="flex items-center gap-2 bg-[#e4424b] hover:bg-[#d13841] text-white px-8 py-2 rounded"
                            >
                                Add to Cart
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#FF4B4B]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFB800]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#7C9EA6]"></div>
                    </div>

                    <button className="w-full border border-gray-300 py-2 rounded hover:border-[#e4424b] hover:text-[#e4424b]">
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    </section>
    {/* Product Details Tabs Section */}
    <section className="py-12">
        <div className="container mx-auto px-4">
            {/* Tabs */}
            <div className="flex border-y-2 border-gray-200 mb-8 w-fit mx-auto">
                <button className="px-8 text-white bg-red-500 border-x-2 border-gray-200">
                    DESCRIPTION
                </button>
                <button className="px-8 border-x text-gray-500 hover:text-gray-700 border-gray-200">
                    ADDITIONAL INFO
                </button>
                <button className="px-8 border-x text-gray-500 hover:text-gray-700 border-gray-200">
                    REVIEWS (0)
                </button>
                <button className="px-8 border-x text-gray-500 hover:text-gray-700 border-gray-200">
                    SHIPPING & DELIVERY
                </button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="prose max-w-none">
                {product.description}
                </div>
                <div>
                    <img 
                        src="/469x356.svg" 
                        alt="Product details" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    </section>
    {/* Related Products Section */}
    <section className="py-12 border-t-2 border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {relatedProducts.map((product) => (
                <ProductCard 
                    image={product.images?.[0]}
                    name={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                    _id={product._id}
                />
            ))}
        
        </div>
      </div>
    </section>
    {/* Brand Logos Section */}
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src="/200x122.svg"
              alt={`Brand logo ${index}`}
              className="w-[200px] h-[122px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Product;