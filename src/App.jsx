import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./assets/utils/random";
import axios from "axios";
import Locationinfo from "./components/Locationinfo";
import ResidentList from "./components/ResidentList";
import LocationForm from "./components/LocationForm";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation);
  };

  const fetchDimension = (idLocation) => {
    const randomDimension = getRandomDimension(126);
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;

    fetchDimension(randomDimension);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-full">
        <LocationForm handleSubmit={handleSubmit} />
        <Locationinfo currentLocation={currentLocation} />
        <ResidentList
          residents={currentLocation?.residents ?? []}
          currentLocation={currentLocation}
        />
      </div>
    </main>
  );
}

export default App;
