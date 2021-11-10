import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, handleAddPlant, handleSearch, search}) {
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search handleSearch={handleSearch} search={search}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
