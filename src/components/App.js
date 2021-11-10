import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then( data => {
      setPlants(data)
      setPlantList(data)
      })
  }, [])

// useEffect(() => {
//   fetch("http://localhost:6001/plants", {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//       name:{newPlant.name},
//       image:{newPlant.image},
//       price:{newPlant.price}
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
// }, [newPlant])



  const handleAddPlant = (formData) => {

    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name:(formData.name),
        image:(formData.image),
        price:(formData.price)
        })
      })
    .then(res => res.json())
    setPlants([...plantList, formData])
    setPlantList([...plantList, formData])
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPlantList(plants.filter(plant => plant.name.includes(e.target.value)))
  }


  return (
    <div className="app">
      <Header />
      <PlantPage
        plantList={plantList}
        handleAddPlant={handleAddPlant}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
