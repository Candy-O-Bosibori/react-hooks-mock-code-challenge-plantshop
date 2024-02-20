import { useState } from "react";
import React from "react";

function PlantCard({img, name, price}) {
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }
  return (
    <div className="card">
      <img src={img} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}> In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </div>
  );
}

export default PlantCard;
