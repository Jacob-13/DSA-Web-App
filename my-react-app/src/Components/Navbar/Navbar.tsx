/* 

    An all encompassing component for the navbar containing each component of the navbar features

    Debating adding a signin functionality where users would be allowed to add their own test cases

*/

import Algorithms from "./Algorithms";
import DataStructures from "./DataStructures";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
    return (
        <div className="flex place-content-evenly items-center py-3 bg-gradient-to-b from-[#EEC584] to-[#FF7394]">
            <HomeIcon />
            <DataStructures />
            <Algorithms />
        </div>
    );
};

export default Navbar;
