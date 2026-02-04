import { products } from "@/data/shophub-data";

const CART_KEY = 'shophub-cart'
const PRODUCTS_KEY = 'shophub-products'

export const cartStore = {
    getStoredProducts() {
        const stored = localStorage.getItem(PRODUCTS_KEY);
        if (!stored) {
            localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
            return products;
        }
        return JSON.parse(stored);
    },

    loadCart() {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    addToCart(product, quantity = 1) {
        const products = this.getStoredProducts();
        const cart = this.loadCart();
        const exists = cart.find(p => p.id === product.id);
        
        const dbProduct = products.find(p => p.id === product.id);

        if (!dbProduct || dbProduct.stock < quantity) {
            throw new Error('Stock insuficiente!');
        }

        exists ? exists.quantity += quantity : cart.push({        
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });

        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    },

    removeProductFromCart(index) {
        const cart = this.loadCart();
        cart.splice(index, 1);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    },

    clearCart() {
        localStorage.removeItem(CART_KEY);
    },
}