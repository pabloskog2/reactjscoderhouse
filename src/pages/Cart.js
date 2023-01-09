import React from "react";
import { NavLink } from "react-router-dom";
import ItemCart from "../components/ItemCart";
import { useCartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import "../styles/Checkout.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.lenght === 0) {
    return (
      <>
        <p>No hay elementos</p>
        <NavLink to="/"></NavLink>
      </>
    );
  }

  return (
    <div className="container ">
      <div className=" col">
        <br/>
        <h1>Cart & Checkout</h1>
        <br />
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <p>Precio Total : {totalPrice()}</p>
        <NavLink to="/checkout">
          <Button className="col btn-succes buttonDetail" role="button">
            Ir al Checkout
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
