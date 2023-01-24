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
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbartop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckoutForm />} />
            <Route exact path="/addproduct" element={<AddProductForm />} />
            <Route exact path="/thankyou" element={<Thankyou />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
