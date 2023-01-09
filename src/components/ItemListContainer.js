import React, {  useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import Form from "react-bootstrap/Form";

import ItemList from "../pages/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("smartphone");

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection, where("category", "==", filter));

    getDocs(q).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
    });
  }, [filter]);

  const filterChangeHandler = (ev) => {
    setFilter(ev.target.value);
  };

  return (
    <div className="container">
      <Form.Select
        aria-label="Default select example"
        placeholder="Seleciona"
        className="filter mt-3"
        onChange={filterChangeHandler}
      >
        <option value="smartphone">Smartphone</option>
        <option value="smartwatch">Smartwatch</option>
      </Form.Select>

      <h2>Productos</h2>
      {products.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
