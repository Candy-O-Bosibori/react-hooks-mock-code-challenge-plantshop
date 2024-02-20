import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">
      {plants.map((plant)=> {
        return <li key={plant.id}>
          <PlantCard  name={plant.name} img={plant.image} price={plant.price}/>
        </li>
      })}
    </ul>
  );
}

export default PlantList;
