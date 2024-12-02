/* 

    An all encompassing component for the navbar containing each component of the navbar features

    Debating adding a signin functionality where users would be allowed to add their own test cases

*/

import { useState } from "react";
import Algorithms from "./Algorithms";
import DataStructures from "./DataStructures";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
    // Used to set which, if any, drop down menu within the navbar to display
    const [displayDataStructures, setDisplayDataStructures] =
        useState<boolean>(false);
    const [displayAlgorithms, setDisplayAlgorithms] = useState<boolean>(false);

    // Handles DataStructures onClick, passed as a prop
    function handleDataStructures() {
        // Always want to hide algorithms drop down on the data structures selection
        setDisplayAlgorithms(false);
        // Reverse the current value, if its not displayed then display it, if it is displayed then hide it.
        setDisplayDataStructures(!displayDataStructures);
    }

    // Handles Algorithms onClick, passed as a prop
    function handleAlgorithms() {
        // Always want to hide Data Structures menu on algorithms selection
        setDisplayDataStructures(false);
        // Reverse the current value. If the menu is not displayed then display it, if it is displayed then hide it.
        setDisplayAlgorithms(!displayAlgorithms);
        console.log("testing");
    }

    return (
        <div className="flex place-content-evenly items-center py-3 bg-gradient-to-b from-[#EEC584] to-[#FF7394]">
            <HomeIcon />
            <DataStructures
                display={displayDataStructures}
                changeDisplay={handleDataStructures}
            />
            <Algorithms
                display={displayAlgorithms}
                changeDisplay={handleAlgorithms}
            />
        </div>
    );
};

export default Navbar;
