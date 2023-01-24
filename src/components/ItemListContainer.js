import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../pages/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection, where("category", "==", id));
    getDocs(q).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
    });
  }, [id]);

  return (
    <div className="container">
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
