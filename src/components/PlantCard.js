import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOutClick() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button onClick={handleSoldOutClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOutClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
