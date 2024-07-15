import { Routes, Route } from "react-router-dom";
import MapLeaflet from "../components/map-leaflet";
import MainPage from "../pages/main-page";
import MapGoogle from "../components/map-google-old";
import GoogleMapComponent from "../components/map-google";
import LandingPage from "../pages/landing-page";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/maps_platform/" element={<LandingPage />} />
      <Route path="/maps_platform/report/" element={<MainPage />} />
      <Route path="/maps_platform/map-leaflet/" element={<MapLeaflet />} />
      <Route path="/maps_platform/map-google-old/" element={<MapGoogle />} />
      <Route path="/maps_platform/map-google/" element={<GoogleMapComponent />} />
    </Routes>
  );
};

export default AppRouter;
