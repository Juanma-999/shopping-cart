import { Link } from 'react-router-dom';

const Product = ({ product, addToCart = null }) => {
    if(addToCart !== null) {
        return (
            <div>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
            </div>
        )
    }
}

export default Product;