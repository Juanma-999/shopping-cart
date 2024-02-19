import { useContext } from 'react';
import Product from './Product';
import { ShopContext } from './App';



const Home = () => {
    const { products, addToCart } = useContext(ShopContext);
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <Product key={product.id} />
            ))}
        </div>
    );
}

export default Home;
