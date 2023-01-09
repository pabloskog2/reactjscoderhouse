import React from "react";
import "../styles/ItemDetail.css";
import { Button } from "react-bootstrap";
import ItemCount from "../components/ItemCount";
import { useCartContext } from "../context/CartContext";
import {NavLink} from 'react-router-dom'

const ItemDetail = ({ item }) => {
  const { addProduct } = useCartContext();

  const addItem = (quantity) => {
    addProduct (item,quantity)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col m-3">
          <img className="imgContainerDetail" src={item.image} alt=""></img>
        </div>
        <div className="col m-3">
          <p>
            <strong>SKU:</strong> {item.id}
          </p>
          <p>
            <strong>Nombre :</strong> {item.title}
          </p>
          <p>
            <strong>Precio :</strong> ${item.price}
          </p>

          <ItemCount addItem={addItem} />
          <br />
          <br />

          <NavLink to="/"><Button
            className="col btn-warning buttonDetail"
            role="button"
          >
            Seguir Comprando
          </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
