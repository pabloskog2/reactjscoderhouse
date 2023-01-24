import React, { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, totalProducts, clearCart } = useCartContext();
  const [formCheckout, setFormCheckout] = useState({});
  const [confirm, setConfirm] = useState(false);


  const initialValue = {
    name: formCheckout.name,
    email: formCheckout.email,
    address: formCheckout.address,
  };

  const delivery = {
    buyer: initialValue,
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const changeHandler = (ev) => {
    const { name, value } = ev.target;
    setFormCheckout({ ...initialValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const formsCollection = collection(db, "forms");
    addDoc(formsCollection, delivery)
      .then(({ id }) => console.log(id))
      .then(clearCart());
      setConfirm(true)
  };

  if (confirm) {
    return (
      <Navigate
        to={{
          pathname: "/thankyou",
        }}
      />
    );
  }

  return (
    <div>
      <div className="container row">
        <div className="col">
          <h1>Checkout</h1>
          <br />
          <form className="form-group" onSubmit={submitHandler}>
            <label htmlFor="name" className="mt-3">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingresa Nombre"
              value={formCheckout.name}
              onChange={changeHandler}
            />
            <label htmlFor="email" className="mt-3">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Ingresa email"
              className="form-control"
              value={formCheckout.email}
              onChange={changeHandler}
            />
            <label htmlFor="address" className="mt-3">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              placeholder="Ingresa Dirección"
              className="form-control"
              value={formCheckout.address}
              onChange={changeHandler}
            />

            <button className="btn btn-success btn-md mt-4">
              Generar Orden de Compra
            </button>
          </form>
        </div>
        <div className="col">
          <h1>Resumen</h1>
          <br />
          <div className="container boxSummary">
            <div className="">
              Compraste un total de {totalProducts()} productos
            </div>
            <br />
            <div className="">
              El valor total de la compra es de ${totalPrice()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
