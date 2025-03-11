
import { useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router'

import Contact from './page/contact'
import Login from './page/login'
import Signup from './page/signup'
import Home from './page/Home'
import Product from './page/product'
import Cart from './page/cart'

import { useProduct } from './context/productContext'
import { getProducts } from './service'

function App() {
  const { products, setProducts, loading, setLoading } = useProduct();
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    
  )
}

export default App