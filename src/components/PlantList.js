import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

  const plantCardRender = plantList.map(plant =>
    <PlantCard
      key={plant.id + plant.name + plant.price}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      />
      )

  return (
    <ul className="cards">
      {plantCardRender}
    </ul>
  );
}

export default PlantList;
