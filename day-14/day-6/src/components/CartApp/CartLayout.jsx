import React from "react";
import FoodItem from "./FoodItem";
import Header from "./Header";
import RestaurantPage from "./RestaurentPage";

function CartLayout() {
  const items = [
    {
      id: 1,
      name: "Pizza",
    },
    {
      id: 2,
      name: "Burger",
    },
    {
      id: 3,
      name: "Kottu",
    }
  ];
  return (
    <div>
      <Header />
      <h3>Menu</h3>
      {items.map((item) => (
        <FoodItem key={item?.id} item={item} />
      ))}
      <hr />
      <RestaurantPage/>
    </div>
  );
}

export default CartLayout;