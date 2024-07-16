import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import data from "../geojson/data";
import * as turf from "@turf/turf";
import { useParams, useSearchParams } from "react-router-dom";
//traer APIkey de un archivo .env

const GoogleMapComponentByName = (props) => {
  const env = import.meta.env.VITE_ENV;
  const ip = import.meta.env.VITE_IP_SERVER;
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [nameLandplot, setNameLandplot] = useState([]);
  const [description, setDescription] = useState([]);
  const [zoom, setZoom] = useState([]);
  const [centerLandplot, setCenter] = useState([]);
  const [formattedCoords, setFormattedCoords] = useState([]);
  const [loading, setLoading] = useState(true);

  const paramIframe = searchParams.get("iframe");
  const paramLandplot = params.LandplotId;

  console.log(paramIframe);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    version: "weekly",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

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

  const [map, setMap] = React.useState(null); // eslint-disable-line no-unused-vars

  //ON LOAD ONLY FOR GOOGLEMAP COMPONENT
  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  const onLoadPolygon = (polygon) => {
    //console.log("polygon: ", polygon);
  };

  const onUnmount = React.useCallback(function callback(map) {
    //eslint-disable-line
    // eslint-disable-line no-unused-vars
    setMap(null);
  }, []);

  const loadLandplotData = async () => {
    const response = await fetch(`${ip}/api/landplots/name/${paramLandplot}`);
    const dataLandplot = await response.json();
    console.log(dataLandplot);
    setNameLandplot(dataLandplot.name);
    setDescription(dataLandplot.description);
    setCenter({
      lat: dataLandplot.latitude,
      lng: dataLandplot.longitude,
    });
    setZoom(dataLandplot.zoom);
    const coordinatesLandplot =
      dataLandplot.geojson.features[0].geometry.coordinates;

    const formattedCoordsLandplot = coordinatesLandplot[0].map((coord) => ({
      lat: coord[1],
      lng: coord[0],
    }));

    //const polygonGeoJSONLandplot = turf.polygon(coordinatesLandplot);
    console.log(formattedCoordsLandplot);
    setFormattedCoords(formattedCoordsLandplot);
    return dataLandplot;
  };

  useEffect(() => {
    if (paramLandplot !== undefined) {
      loadLandplotData();
    }
  }, [paramLandplot]);


  return isLoaded ? (
    <div style={{ display: "flex" }}>
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        mapTypeId="satellite"
        zoom={zoom - 2} //eslint-disable-line
        center={centerLandplot}
        options={{
          disableDefaultUI: true,
          mapTypeId: "satellite",
          disableDoubleClickZoom: paramIframe === "true" ? true : false,
        }}
      >
        <Polygon paths={formattedCoords} options={options} />
      </GoogleMap>
      <div
        className={`landplot-info`}
      >
        <p className="p-landplot-name">{nameLandplot}</p>
        <p className="p-landplot-info">{description}</p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMapComponentByName;
