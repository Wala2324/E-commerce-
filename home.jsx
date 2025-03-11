import React, { useState } from 'react';

import { useProduct } from '../context/productContext';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import ProductCard from '../component/productCard';
import HorizontalCarousel from '../component/horizontalCarousel';


const Home = () => {

    const { products, categories } = useProduct();
    const [currentCategory, setCurrentCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
    }

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <span className="text-sm tracking-[2px] uppercase">
              WELLCOME TO bmarketo SHOP
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Exclusive Chair<br />
              gold Collection.
            </h1>
            <button className="bg-[#e4424b] hover:bg-[#d13841] text-white px-8 py-3 transition-colors duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/625x647.svg" 
              alt="Gold Chair Collection" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Best Collection</h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button 
                key={'all'} 
                className="hover:text-[#e4424b] cursor-pointer"
                onClick={() => handleCategoryClick('All')}
              >
                All
              </button>
            {categories.map((category) => (
              <button 
                key={category} 
                className="hover:text-[#e4424b] cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {products.filter((product) => currentCategory === 'All' || product.category === currentCategory).map((product) => (
              <ProductCard 
                image={product.images?.[0]}
                name={product.name}
                price={product.price}
                _id={product._id}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 px-8 py-2 hover:border-[#e4424b] hover:text-[#e4424b] transition-colors duration-300 cursor-pointer">
              Load more
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-red-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <ProductCard 
              image="/369x310.svg"
              name="Table Lamp - scelerisque tempore"
              price={50.00}
              salePrice={30.00}
            />

            <div className="w-[369px] bg-white p-8 flex flex-col items-center text-center">
              <span className="text-[#e4424b] font-medium mb-4">UP TO SELL</span>
              <h2 className="text-4xl font-bold mb-4">50% OFF</h2>
              <h3 className="text-xl font-semibold mb-4">Get The Best Price</h3>
              <p className="text-gray-600 mb-6">
                Get the best daily offer et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren no sea taki
              </p>
              <button className="text-gray-600 hover:text-[#e4424b] font-medium">
                Discover More
              </button>
            </div>

            <ProductCard 
              image="/369x310.svg"
              name="Table Lamp - scelerisque tempore"
              price={50.00}
              salePrice={30.00}
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Top selling products in this week</h2>
          <HorizontalCarousel products={products} />
        </div>
      </section>
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your mail here" 
                className="w-full px-4 py-[15px] pr-[180px] border border-gray-200 rounded-full focus:outline-none focus:border-[#e4424b]"
              />
              <button className="absolute right-1 top-1 bg-[#e4424b] hover:bg-[#d13841] text-white px-6 py-3 rounded-full transition-colors duration-300">
                Subscribe for newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;