const BASE_URL = 'https://js2-ecommerce-api.vercel.app/api';

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
};

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
};


export const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
};

export const register = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
};

export const createOrder = async (orderData) => {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(orderData),
    });
    const data = await response.json();
    return data;
}