import { Routes, Route } from "react-router-dom";
import MapLeaflet from "../components/map-leaflet";
import MainPage from "../pages/main-page";
import MapGoogle from "../components/map-google-old";
import GoogleMapComponent from "../components/map-google";
import LandingPage from "../pages/landing-page";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/report" element={<MainPage />} />
      <Route path="/map-leaflet" element={<MapLeaflet />} />
      <Route path="/map-google-old" element={<MapGoogle />} />
      <Route path="/map-google" element={<GoogleMapComponent />} />
    </Routes>
  );
};

export default AppRouter;
