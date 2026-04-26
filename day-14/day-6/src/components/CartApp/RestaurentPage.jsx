import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function RestaurantPage() {
  const {cart, removeCart} = useContext(CartContext)
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div>
          <h5>{item.name}</h5>
          <button onClick={() => removeCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default RestaurantPage