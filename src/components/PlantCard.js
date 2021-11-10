import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [stocked, setStocked] = useState(true)

  const handleStock = () => {
    setStocked((current) => !current)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
