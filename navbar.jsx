import { Link } from 'react-router';

import {FaShoppingCart} from 'react-icons/fa'
import { IoIosSearch } from "react-icons/io";
import { useCart } from '../context/cartContext';

const Navbar = () => {
    const { cartItems } = useCart();
  // For demonstration - replace with your actual cart state management
  const cartItemsCount = cartItems.length;

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              <img src={'/logo.svg'} alt="Logo" className="w-32" />
            </Link>
          </div>

          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Contact
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-gray-900 pl-3 py-2">
              <IoIosSearch />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Login
            </Link>
            
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 pr-3 py-2 relative">
              <FaShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;