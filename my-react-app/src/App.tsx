import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import StackPage from "./Components/StackPage/StackPage";

function App() {
    return (
        <div className="h-screen bg-[#242424] overflow-y-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Stack" element={<StackPage />} />
            </Routes>
        </div>
    );
}

export default App;
