import { createContext, useContext, useState } from 'react';

// Create context
const ProductContext = createContext();

// Provider component
export function ProductProvider({ children }) {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const categories = [...new Set(products.map((product) => product.category))];

    // Values to share
    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        categories
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

// Custom hook to use the context
export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}