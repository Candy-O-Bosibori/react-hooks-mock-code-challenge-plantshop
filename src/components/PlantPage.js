import { useEffect, useState } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // set state for data
const[plants, setPlants] = useState([])
const [search, setSearch] = useState("")
  

// get the data using a get request
useEffect(()=>{
  fetch(" http://localhost:6001/plants")
  .then((resp)=> resp.json())
  .then((data)=>setPlants(data))
}, [])
// turn into json
// data

// add aplant
function handleAddPlant(newPlant){
const addnewPlant = [...plants, newPlant]
setPlants(addnewPlant);
}

// search
const displayedPlants = plants.filter((plant)=>{
if(plant && plant.name){
  return plant.name.toLowerCase().includes(search.toLowerCase())
}
return false
})


  return (
    <main>
      <NewPlantForm  onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
