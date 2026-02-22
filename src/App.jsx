import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { foodData as initialFoodData } from './data/foodData';

// Layouts
import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';

// User Pages
import Home from './pages/Home';
import Menu from './pages/Menu';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminOrders from './pages/AdminOrders';
import NotFound from './pages/NotFound';

function App() {
  const [products, setProducts] = useState(initialFoodData);

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route
              path="products"
              element={<AdminProducts products={products} onDelete={deleteProduct} />}
            />
            <Route
              path="add-product"
              element={<AdminAddProduct onAdd={addProduct} />}
            />
            <Route path="orders" element={<AdminOrders />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
