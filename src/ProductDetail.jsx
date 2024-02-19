import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from './App';

const ProductDetails = () => {
  const { products } = useContext(ShopContext);
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;