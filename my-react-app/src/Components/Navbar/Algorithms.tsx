/*
    Component used for the functionality of the algorithms option within the navbar
    The option allows users to view a dropdown menu of each algorithm that will bring them to a page
    with details for that specific algorithm
*/

import Arrow from "../../assets/LandingPage/Black-Arrow.png";

type AlgorithmsProps = {
    display: boolean;
    changeDisplay: () => {};
};

const Algorithms = ({ display, changeDisplay }: AlgorithmsProps) => {
    // use the props to change how the triangle rotates

    return (
        <>
            <div className="flex text-5xl font-semibold cursor-pointer">
                Algorithms
                <img
                    className="relative ml-5 mt-5 h-5 w-5 rotate-90"
                    src={Arrow}
                />
            </div>
        </>
    );
};

export default Algorithms;
