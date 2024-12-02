/*
    A simple logo style portion of the Navbar that allows users to quickly get back to the landing page with a simple click
*/

import { Link } from "react-router-dom";

const HomeIcon = () => {
    return (
        <div className="text-center cursor-pointer">
            <Link to="/">
                <div className="text-7xl font-bold ">DSA</div>
                <div className="text-3xl">OVERVIEW</div>
            </Link>
        </div>
    );
};

export default HomeIcon;
