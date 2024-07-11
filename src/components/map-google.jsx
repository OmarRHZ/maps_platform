import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import data from "../geojson/data";
import * as turf from "@turf/turf";
//traer APIkey de un archivo .env

const GoogleMapComponent = (props) => {
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const center = {
    lat: props.lat ? props.lat : 8.564547, //eslint-disable-line
    lng: props.lng ? props.lng : -83.434447, //eslint-disable-line
  };

  // Función para generar puntos aleatorios dentro del polígono
  const generateRandomPoints = (polygon, numPoints) => {
    const points = turf.randomPoint(numPoints, { bbox: turf.bbox(polygon) });
    return points.features.filter((point) =>
      turf.booleanPointInPolygon(point, polygon)
    );
  };
  const options = {
    fillColor: "white",
    fillOpacity: 0.1,
    strokeColor: "#4db8ff",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
  };

  const coordinates1 = data[0].features[0].geometry.coordinates;
  console.log(coordinates1);
  const formattedCoords1 = coordinates1[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));

  const polygonGeoJSON1 = turf.polygon(coordinates1);

  const coordinates2 = data[1].features[0].geometry.coordinates;

  const formattedCoords2 = coordinates2[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));

  const polygonGeoJSON2 = turf.polygon(coordinates2);


  const coordinates4 = data[2].features[0].geometry.coordinates;

  const formattedCoords4 = coordinates4[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));
  const polygonGeoJSON4 = turf.polygon(coordinates4);
  
  const coordinates5 = data[3].features[0].geometry.coordinates;

  const formattedCoords5 = coordinates5[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));
  const polygonGeoJSON5 = turf.polygon(coordinates5);
  
  const coordinates6 = data[4].features[0].geometry.coordinates;

  const formattedCoords6 = coordinates6[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));
  const polygonGeoJSON6 = turf.polygon(coordinates6);
  
  const coordinates7 = data[5].features[0].geometry.coordinates;

  const formattedCoords7 = coordinates7[0].map((coord) => ({
    lat: coord[1],
    lng: coord[0],
  }));
  const polygonGeoJSON7 = turf.polygon(coordinates7);

  const coordinates8 = data[6].features[0].geometry.coordinates;
  
  const formattedCoords8 = coordinates8[0].map((coord) => ({
      lat: coord[1],
      lng: coord[0],
    }));
    const polygonGeoJSON8 = turf.polygon(coordinates8);

  useEffect(() => {
    const numPoints = 10; // Número de puntos que deseas generar
    if (props.geoCode === "CR-001") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON1, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(numPoints)
          console.log(props.geoCode);//eslint-disable-line
          console.log(randomPoints);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-002") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON2, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-004") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON4, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-005") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON5, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-006") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON6, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-007") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON7, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }else if (props.geoCode === "CR-008") {//eslint-disable-line
        const randomPoints = generateRandomPoints(polygonGeoJSON8, numPoints);
        const newMarkers = randomPoints.map((point) => ({
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0],
          }));
          console.log(props.geoCode);//eslint-disable-line
          console.log(newMarkers);
          setMarkers(newMarkers);
    }
    
  }, [props.geoCode]);//eslint-disable-line

  const [map, setMap] = React.useState(null); // eslint-disable-line no-unused-vars

  //ON LOAD ONLY FOR GOOGLEMAP COMPONENT
  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  const onLoadPolygon = (polygon) => {
    // eslint-disable-line no-unused-vars
    console.log("polygon: ", polygon);
  };

  const onUnmount = React.useCallback(function callback(map) {//eslint-disable-line
    // eslint-disable-line no-unused-vars
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "100vh", width: "100%" }}
      mapTypeId="satellite"
      zoom={props.zoom ? props.zoom : 12} //eslint-disable-line
      center={center}
      options={{
        disableDefaultUI: true,
        mapTypeId: "satellite",
      }}
    >
      <Polygon paths={formattedCoords1} options={options} />
      <Polygon paths={formattedCoords2} options={options} />
      <Polygon paths={formattedCoords4} options={options} />
      <Polygon paths={formattedCoords5} options={options} />
      <Polygon paths={formattedCoords6} options={options} />
      <Polygon paths={formattedCoords7} options={options} />
      <Polygon
        onLoad={onLoadPolygon}
        paths={formattedCoords8}
        options={options}
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker}  icon={{
            url: "Tree.png", // Reemplaza con la URL de tu imagen SVG o PNG
            scaledSize: new window.google.maps.Size(60, 60) // Ajusta el tamaño del icono
          }}/>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapComponent;
