import { APIProvider, Map } from "@vis.gl/react-google-maps";
//traer geojson de un archivo .geojson
import data from "../geojson/data";
//traer APIkey de un archivo .env
const googleMapsConfig = {
    API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    }

const MapGoogle = () => {
    const coordinates = data[0].features[0].geometry.coordinates[0];
    console.log(coordinates);

    const formattedCoords = coordinates.map(coord => ({ lat: coord[1], lng: coord[0] }));
    console.log(formattedCoords);
    //console.log(googleMapsConfig.API_KEY);
  return (
    <APIProvider apiKey={googleMapsConfig.API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
      </Map>
      
    </APIProvider>
  );
};

export default MapGoogle;
