import React from "react";
import "../styles/ItemList.css";
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom'

function ItemList({ products = [] }) {
  return (
    <div className="home-container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="m-3 col-lg-auto">
            <div className="card cardContainer">
              <div className="imgContainer">
                <img className="image" src={product.image} alt=""></img>
              </div>
              <div className="titleContainer">{product.title}</div>
              <div className="priceContainer">$ {product.price}</div>
              <NavLink to={`/${product.id}`}>
                <Button className="mt-1">Comprar</Button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
