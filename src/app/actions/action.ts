import { Product } from "../../../types/products";

export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].stock += 1;
    }
    else {
        cart.push({ ...product, stock: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

}

export const removeFromCart = (productId: string,) => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(item => item._id === productId);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].stock = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }

}

export const getCartItmes = (): Product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}
