import React, { useState } from "react";


const [foods, setFoods] = useState(spicyFoods);
const [filterBy, setFilterBy] = useState("All");
function handleFilterChange(event) {
    setFilterBy(event.target.value);
    const foodsToDisplay = foods.filter((food) => {
        if (filterBy === "All") {
          return true;
        } else {
          return food.cuisine === filterBy;
        }
      });
    
      const foodList = foodsToDisplay.map((food) => (
        <li key={food.id} onClick={() => handleLiClick(food.id)}>
          {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
        </li>
      ));

  
  
  return (
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
  );
}
  export default  handleFilterChange;