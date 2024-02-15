import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetail';
import products from './products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;



