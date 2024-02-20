import { useState } from "react";
import React from "react";

function PlantCard({img, name, price, id, onDeletePlant}) {
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });

    onDeletePlant(id);
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

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PlantCard;
