# Proyecto de Ecommerce para clase ReactJS Coderhouse

Este proyecto está creado y optimizado para cumplir los objetivos solicitados en la asignatura React JS de CoderHouse.

## Usuario

### Home

En el Home se encuentran 2 categorías seleccionables _"Smartphones y Smartwatch"_

### Detalle del Producto

Los detalles de cada Producto se encuentran presionando "Comprar" desde el Home. desde esta sección podrás escoger la cantidad que deseas agregar al carrito de comperas.

### Carritode Compras

Una vez que tienes la cantidad de productos que deseas agregar al carrito de compras, se presiona el ícono del carro y se mostrará la vista de los productos seleccionados. En esta vista podrás eliminar productos si lo deseas.
Una vez confirmada la cantidad de producto a comprar, se clickea `Ir al Checkout`

### Checkout

En esta sección se muestra un formulario de contacto y un resumen general de la compra.
Una vez completado el formulario, se debe clickear `Generar Orden de Compra`

## Administrador y Base de Datos

### Base de Datos

#### Orden de Compra

#### Productos

Los productos se pueden agregar desde http://localhost:3000/addproducts cumpliendo los formatos solicitados en el formulario.

Los productos se agregarán en la base de datos con el siguiente formato:



```
[
    items: {
        category: "",
        image: "",
        price: "",
        title: ""
    }
]
```


#### Orden de Compra

Al generar la Orden de compra. se grea en la base de datos un nuevo objeto con el formato:

```
{
forms:{
    buyer: {
        address: "",
        email: "",
        name: "",
    },
    items: {
      id: "",
      title: "",
      price: "",
      quantity: "",
    },
    total: "",
  }
}
```
