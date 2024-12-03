/* 

    An all encompassing component for the navbar containing each component of the navbar features

    Debating adding a signin functionality where users would be allowed to add their own test cases

*/

import { useEffect, useRef, useState } from "react";
import Algorithms from "./Algorithms";
import DataStructures from "./DataStructures";
import HomeIcon from "./HomeIcon";
import DSMenu from "./DSMenu";
import AMenu from "./AMenu";

const Navbar = () => {
    // Used to set which, if any, drop down menu within the navbar to display
    const [displayDataStructures, setDisplayDataStructures] =
        useState<boolean>(false);
    const [displayAlgorithms, setDisplayAlgorithms] = useState<boolean>(false);
    // Width of the referenced div from the useRef
    const [width, setWidth] = useState<number>(300);
    const [aWidth, setAWidth] = useState<number>(3000);

    // making use of useRef to get the width of the idv element from the data structures navbar dropdown button and passing it to the actual menu to match the width
    // using this method so that it is consistently always the same size as the menu button no matter what device or screen size the user is using
    const dSDiv = useRef<HTMLDivElement | null>(null);
    const aDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // width management for Data Structures menu
        if (dSDiv.current) {
            setWidth(dSDiv.current.offsetWidth);
        }

        // Width management for Algorithms menu
        if (aDiv.current) {
            setAWidth(aDiv.current.offsetWidth);
        }
    }, []);

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
    }

    return (
        <div className="flex relative place-content-evenly items-center py-3 bg-gradient-to-b from-[#EEC584] to-[#FF7394]">
            <HomeIcon />
            <div>
                <div ref={dSDiv}>
                    <DataStructures
                        display={displayDataStructures}
                        changeDisplay={handleDataStructures}
                    />
                </div>
                <div>
                    {displayDataStructures ? <DSMenu size={width} /> : <></>}
                </div>
            </div>
            <div ref={aDiv}>
                <div>
                    <Algorithms
                        display={displayAlgorithms}
                        changeDisplay={handleAlgorithms}
                    />
                </div>
                <div>{displayAlgorithms ? <AMenu size={aWidth} /> : <></>}</div>
            </div>
        </div>
    );
};

export default Navbar;
