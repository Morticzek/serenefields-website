// src/stores/CartStore.ts
interface CartItem {
    id: number;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    image: string;
}

class CartStore {
    private static instance: CartStore;
    private items: Map<number, CartItem> = new Map();

    private constructor() {}

    static getInstance(): CartStore {
        if (!CartStore.instance) {
            CartStore.instance = new CartStore();
        }
        return CartStore.instance;
    }

    addItem(item: Omit<CartItem, 'quantity'>) {
        const existingItem = this.items.get(item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            this.items.set(item.id, existingItem);
        } else {
            this.items.set(item.id, { ...item, quantity: 1 });
        }
        this.updateCart();
    }

    removeItem(id: number) {
        this.items.delete(id);
        this.updateCart();
    }

    updateQuantity(id: number, quantity: number) {
        const item = this.items.get(id);
        if (item) {
            item.quantity = quantity;
            if (quantity <= 0) {
                this.items.delete(id);
            } else {
                this.items.set(id, item);
            }
            this.updateCart();
        }
    }

    getItems() {
        return Array.from(this.items.values());
    }

    getTotalPrice() {
        return Array.from(this.items.values()).reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    private updateCart() {
        window.dispatchEvent(new CustomEvent('cart-updated', {
            detail: {
                items: this.getItems(),
                total: this.getTotalPrice()
            }
        }));
    }
}

export const cartStore = CartStore.getInstance();
