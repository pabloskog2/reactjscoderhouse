import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ addItem }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const addItemHandler = () => {
  addItem(count)
  }
    return (
    <div className="container">
      <div className="counterbox row">
        <button onClick={increase} className="col counters">
          +
        </button>
        <span className="col">{count}</span>
        <button
          disabled={count <= 1}
          onClick={decrease}
          className="col counters"
        >
          -
        </button>
      </div>
      <Button
        onClick={addItemHandler}
        className="btn btn-success row buttonDetail"
        role="button"
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
