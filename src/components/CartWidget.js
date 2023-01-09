import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const {totalProducts}=useCartContext();
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="qty-display">{totalProducts()}</div>
    </div>
  );
};

export default CartWidget;
