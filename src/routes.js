// Data
import HD2 from "../src/Data/HD2.js";
import RD from "../src/Data/RD.js";
import LM from "../src/Data/LM.js"

// Components
import FormRegisterHotelEgypt from "./Pages/FormRegisterHotelEgypt/FormRegisterHotelEgypt.jsx";
import FormRegisterMa3lemEgypt from "./Pages/FormRegisterMa3lemEgypt/FormRegisterMa3lemEgypt.jsx";
import FormRegisterRestaurantEgypt from "./Pages/FormRegisterRestaurantEgypt/FormRegisterRestaurantEgypt.jsx";
import ProgramEgypt from "./Pages/ProgramEgypt/ProgramEgypt.jsx";
import MapPage from "./Pages/MapPage/MapPage.jsx";
import RestaurantList from './components/RestaurantList.jsx'
import LandMarkList from "./components/LandMarkList.jsx";
import FamousActivities from "./components/FamousActivities";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer";
import MainPage from "./Pages/Home/MainPage";
import HotelList from "./components/HotelList";

// libraries
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";

function AppRoutes() {
    const DataHD = HD2();
    const DataRD = RD();
    const DataLM = LM();
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage />} />
                <Route path="/HotelList" element={<HotelList hotels={DataHD} />} />
                <Route path="/RestaurantList" element={<RestaurantList restaurants={DataRD} />} />
                <Route path="/LandMarkList" element={<LandMarkList landmarks={DataLM} />} />
                <Route path="home" element={<MainPage />} />
                <Route path="destinations" element={<Cards />} />
                <Route path="tours" element={<FamousActivities />} />
                <Route path="contact" element={<Footer />} />
                <Route
                    path="/FormRegisterHotelEgypt"
                    element={<FormRegisterHotelEgypt />}
                />
                <Route
                    path="/FormRegisterMa3lemEgypt"
                    element={<FormRegisterMa3lemEgypt />}
                />
                <Route
                    path="/FormRegisterRestaurantEgypt"
                    element={<FormRegisterRestaurantEgypt />}
                />
                <Route path="/ProgramEgypt" element={<ProgramEgypt />} />
                <Route path="/MapPage" element={<MapPage />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AppRoutes;
