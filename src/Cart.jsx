import Product from "./Product";

export default function Cart({ cart, addToCart }) {
  return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                {cart.map(product => (
                    <Product key={product.id} product={product} />
                ))}
                </ul>
            )}
        </div>
    );
}
