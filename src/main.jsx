import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //eslint-disable-line
import "./index.css";
import { BrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"; //eslint-disable-line
import MainPage from "./pages/main-page.jsx";
import LandingPage from "./pages/landing-page.jsx";
import MapLeaflet from "./components/map-leaflet.jsx";
import MapGoogle from "./components/map-google-old.jsx";
import GoogleMapComponent from "./components/map-google.jsx";
import GoogleMapComponentByName from "./components/map-google-byname.jsx";
import TestIframe from "./pages/test-iframe.jsx";
//For normal websites
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//For GitHub Pages

// const router = createHashRouter([
//   {
//     path: "/maps_platform/",
//     element: <LandingPage />
//   },
//   {
//     path: "/maps_platform/report",
//     element: <MainPage />
//   },
//   {
//     path: "/maps_platform/map-leaflet",
//     element: <MapLeaflet />
//   },
//   {
//     path: "/maps_platform/map-google-old",
//     element: <MapGoogle />
//   },
//   {
//     path: "/maps_platform/map-google",
//     element: <GoogleMapComponent />
//   },
//   {
//     path: "/maps_platform/map-google/:LandplotId",
//     element: <GoogleMapComponentByName/>
//   },
//   {
//     path: "/maps_platform/test-iframe",
//     element: <TestIframe />
//   }
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );
