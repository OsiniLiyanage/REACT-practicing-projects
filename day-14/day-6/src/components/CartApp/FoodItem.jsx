import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function FoodItem({item}) {
  const {addCart} = useContext(CartContext);
  return (
    <div>
      <h5>{item.name}</h5>
      <button onClick={() => addCart(item)}>Add to Cart</button>
    </div>
  )
}

export default FoodItem