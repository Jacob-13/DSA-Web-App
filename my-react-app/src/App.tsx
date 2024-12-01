import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="h-screen bg-[#242424] overflow-y-hidden">
            <Navbar />
            <LandingPage />
        </div>
    );
}

export default App;
