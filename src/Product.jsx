import { Link } from 'react-router-dom';

const Product = ({ product, addToCart = null }) => {
    return (
        <div>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default Product;