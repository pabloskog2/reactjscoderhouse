import React, { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const AddProductForm = () => {
  const initialValue = {
    category: "",
    title: "",
    price: "",
    image: "",
  };
  const [form, setForm] = useState({});

  const changeHandler = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setForm({ ...initialValue });

    const db = getFirestore();
    const formsCollection = collection(db, "items");

    addDoc(formsCollection, form).then((snapshot) => {
      setForm(snapshot.id);
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Agrega un Producto a la db de Firebase</h1>
        <br />
        <form className="form-group" onSubmit={submitHandler}>
          <label htmlFor="category" className="mt-3">
            Categoría del Producto
          </label>
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Ingresa la categoría del producto smartphone o smartwatch"
            value={form.category}
            onChange={changeHandler}
          />

          <label htmlFor="title" className="mt-3">
            Nombre del Producto
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Ingresa el nombre del producto"
            value={form.title}
            onChange={changeHandler}
          />
          <label htmlFor="price" className="mt-3">
            Precio del Producto
          </label>
          <input
            type="number"
            name="price"
            placeholder="Ingresa el precio del producto"
            className="form-control"
            value={form.price}
            onChange={changeHandler}
          />
          <label htmlFor="image" className="mt-3">
            URL de la imágen del Producto
          </label>
          <input
            type="text"
            name="image"
            placeholder="Ingresa una URL de archivo jpg o png"
            className="form-control"
            value={form.image}
            onChange={changeHandler}
          />

          <button className="btn btn-success btn-md mt-4">Agregar a la Base de Datos de Firebase</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
