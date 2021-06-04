import React from 'react'
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cartReducer.addedItems)
 console.log(cart)
  return (
    <div>
      {cart.map((item) => <p>{item.title}</p>)}
    </div>
  )
}

export default Cart
