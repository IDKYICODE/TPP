import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import PicklesList from "./pages/PicklesList";
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register"

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pickleslist" element={<PicklesList/>} />
      <Route path="/product" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  </div>
);

export default App;