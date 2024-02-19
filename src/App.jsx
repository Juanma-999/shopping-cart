import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetail';
import products from './products';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <ShopContext.Provider value={{ cart, products, addToCart, removeFromCart }}>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;



