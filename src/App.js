import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./components/Navbartop";
import CartProvider from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CheckoutForm from "./components/CheckoutForm";
import Cart from "./pages/Cart";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbartop />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckoutForm />} />
            <Route exact path="/addproduct" element={<AddProductForm />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
