import { useNavigate } from 'react-router';

import Navbar from '../component/navbar';
import Footer from '../component/footer';

import { useCart } from '../context/cartContext';
import { useProduct } from '../context/productContext';
import { createOrder } from '../service';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
    const { products } = useProduct();
    const navigate = useNavigate();

    // Function to get product details from products array
    const getProductDetails = (productId) => {
        return products.find(product => product._id === productId);
    };

    const handleCreateOrder = async () => {
        try {
            const orderData = {
                products: cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity
                }))
            };

            await createOrder(orderData);


            // Clear the cart after successful order
            clearCart();
            navigate('/orders');
            alert('Order created successfully!');
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Failed to create order. Please try again.');
        }
    };

    if (cartItems.length === 0) {
        return <>
        <Navbar />
        <div className="text-center p-4 min-h-[calc(100vh-100px)]">Your cart is empty</div>
        <Footer />
        </> 
    }

    return (
        <>
        <Navbar />
        <div className="container mx-auto p-4 min-h-[calc(100vh-100px)]">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            
            <div className="space-y-4">
                {cartItems.map((item) => {
                    const productDetails = getProductDetails(item.id);
                    return (
                        <div key={item.id} className="flex items-center border p-4 rounded">
                            <img 
                                src={productDetails?.images?.[0]} 
                                alt={productDetails?.name} 
                                className="w-20 h-20 object-cover mr-4"
                            />
                            <div className="flex-grow">
                                <h2 className="font-semibold">{productDetails?.name}</h2>
                                <p className="text-gray-600">${productDetails?.price}</p>
                                <div className="flex items-center mt-2">
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="px-2 py-1 border rounded"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="px-2 py-1 border rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 text-right">
                <p className="text-xl font-bold mb-4">
                    Total: ${getTotalPrice().toFixed(2)}
                </p>
                <button 
                    onClick={handleCreateOrder}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    disabled={cartItems.length === 0}
                >
                    Create Order
                </button>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Cart;