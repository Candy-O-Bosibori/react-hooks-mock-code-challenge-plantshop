import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant}) {
  return (
    <ul className="cards">
      {plants.map((plant)=> {
        return <li key={plant.id}>
          <PlantCard  onDeletePlant={onDeletePlant} id={plant.id} name={plant.name} img={plant.image} price={plant.price}/>
        </li>
      })}
    </ul>
  );
}

export default PlantList;
