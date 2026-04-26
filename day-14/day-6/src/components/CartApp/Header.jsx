import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Header() {
  const {cart} = useContext(CartContext);
  return (
    <div>
      <h2>Cart: {cart?.length}</h2>
    </div>
  )
}

export default Header