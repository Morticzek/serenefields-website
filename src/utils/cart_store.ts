interface CartItem {
    id: number;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    image: string;
    oneTime?: boolean;
}

class CartStore {
    private static instance: CartStore;
    private items: Map<number, CartItem>;

    private constructor() {
        this.items = new Map();
        this.loadFromStorage();
    }

    static getInstance(): CartStore {
        if (!CartStore.instance) {
            CartStore.instance = new CartStore();
        }
        return CartStore.instance;
    }

    private loadFromStorage() {
        const savedCart = localStorage.getItem('cart-items');
        if (savedCart) {
            const items = JSON.parse(savedCart);
            items.forEach((item: CartItem) => {
                this.items.set(item.id, item);
            });
            this.updateCart();
        }
    }

    private saveToStorage() {
        localStorage.setItem('cart-items', JSON.stringify(Array.from(this.items.values())));
    }

    addItem(item: Omit<CartItem, 'quantity'>) {
        const existingItem = this.items.get(item.id);

        if (existingItem && item.oneTime) {
            return;
        }

        if (existingItem && !item.oneTime) {
            existingItem.quantity += 1;
            this.items.set(item.id, existingItem);
        } else {
            this.items.set(item.id, { ...item, quantity: 1 });
        }

        this.saveToStorage();
        this.updateCart();
    }

    removeItem(id: number) {
        this.items.delete(id);
        this.saveToStorage();
        this.updateCart();
    }

    getTotalQuantity(): number {
        return Array.from(this.items.values())
            .reduce((total, item) => total + item.quantity, 0);
    }

    updateQuantity(id: number, quantity: number) {
        const item = this.items.get(id);
        if (item) {
            if (item.oneTime) {
                return;
            }

            if (quantity <= 0) {
                this.items.delete(id);
            } else {
                item.quantity = quantity;
                this.items.set(id, item);
            }
            this.saveToStorage();
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
                total: this.getTotalPrice(),
                totalQuantity: this.getTotalQuantity()
            }
        }));
    }
}

export const cartStore = CartStore.getInstance();
