import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);


function handleLiClick(){
  const newFood = getNewRandomSpicyFood();
  const newFoodArray = [...foods, newFood]
  if (newFoodArray.length > 0) {
    const newFoodArray = [...foods];
    newFoodArray.pop();
    setFoods(newFoodArray);
  };
}


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray);
    
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <button onClick={handleLiClick}>Remove new food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
