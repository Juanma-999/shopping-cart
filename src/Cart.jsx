import { useContext } from "react";
import Product from "./Product";
import { ShopContext } from "./App";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(ShopContext);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                {cart.map(product => (
                    <li key={product.id}>
                    <Product product={product} addToCart={addToCart} />
                    <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}
