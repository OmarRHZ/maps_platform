import { Routes, Route } from "react-router-dom";
import MapLeaflet from "../components/map-leaflet";
import MainPage from "../pages/main-page";
import MapGoogle from "../components/map-google-old";
import GoogleMapComponent from "../components/map-google";
import LandingPage from "../pages/landing-page";
import GoogleMapComponentByName from "../components/map-google-byname";
import TestIframe from "../pages/test-iframe";

//if you want to use the HashRouter for github pages, you can use the following code "/maps_platform" before the path
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/report/" element={<MainPage />} />
      <Route path="/map-leaflet/" element={<MapLeaflet />} />
      <Route path="/map-google-old/" element={<MapGoogle />} />
      <Route path="/map-google/" element={<GoogleMapComponent />} />
      <Route path="/map-google/:LandplotId" element={<GoogleMapComponentByName />} />
      <Route path="/test-iframe" element={<TestIframe />} />
    </Routes>
  );
};

export default AppRouter;
