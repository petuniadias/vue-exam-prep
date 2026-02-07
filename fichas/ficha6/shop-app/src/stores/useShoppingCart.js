import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('use-shopping-cart',  {
    state: () => ({
        cartItems: [
            // {
            //     id: self.crypto.randomUUID(),
            //     name: 'Blue Shoes',
            //     price: 24.99,
            //     quantity: 2,
            //     stock: 20
            // }
        ],
        discountCode: '',
        discountPercentage: 0
    }),

    getters: {
        subtotal: (state) => state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0),
        discountValue(state) {
            return (this.subtotal * state.discountPercentage) / 100        
        },
        totalAfterDiscount() {
            return this.subtotal - this.discountValue
        },
        getIVA() {
            const IVA = 0.23;
            return this.totalAfterDiscount * IVA;
        },
        finalTotal() {
            return this.totalAfterDiscount + this.getIVA()
        },
        totalCartItems: (state) => state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
        isCartEmpty: (state) => state.cartItems.length === 0
    },

    actions: {
        addItem(product) {
            const existingItem = this.cartItems.find(p => p.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1
                return
            }

            const newItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                stock: product.stock
            }

            this.cartItems.push(newItem);
        },

        removeItem(id) {
            const index = this.cartItems.findIndex(p => p.id === id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
            }
        },

        updateQuantity(id, quantity) {
            const item = this.cartItems.find(p => p.id === id);
            if (!item) return
            const newQuantity = item.quantity + quantity;
            if (newQuantity > item.stock) {
                throw new Error("There's no stock available!")
            }

            item.quantity = newQuantity
        },

        incrementQuantity(id) {
            const item = this.cartItems.find(p => p.id === id);
            if (!item) return
            if (item.stock < item.quantity + 1) {
                throw new Error("There's no stock available!")
            }

            item.quantity += 1
        },

        decrementQuantity(id) {
            const item = this.cartItems.find(p => p.id === id);
            if (!item) return
            if (item.quantity <= 1) {
                this.removeItem(id)
                return
            }
            item.quantity -= 1
        },

        applyDiscount(code) {
            if (code === 'SAVE10') {
                this.discountCode = code
                this.discountPercentage = 10 
            }

            if (code === 'SAVE20') {
                this.discountCode = code
                this.discountPercentage = 20
            }
        },

        removeDiscount() {
            this.discountCode = ''
            this.discountPercentage = 0
        },

        clearCart() {
            this.cartItems = [];
        }
    }
})
