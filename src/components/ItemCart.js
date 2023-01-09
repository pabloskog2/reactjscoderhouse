import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct}=useCartContext();
  return (
    <>
    <div className='container boxCartItems'>
        <img className='imgCart col' src={product.image} alt={product.title}/>
        <p className='col'>{product.quantity}</p>
        <p className='col'>${product.price}</p>
        <p className='col'>${product.price*product.quantity}</p>
        <Button className='btn btn-danger col buttonDanger' onClick={()=>removeProduct(product.id)} >Remover</Button>
    </div>
    </>
  )
}

export default ItemCart