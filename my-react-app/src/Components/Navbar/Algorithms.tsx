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

    const menuSymbol = `${
        display
            ? "relative ml-5 mt-5 h-5 w-5"
            : "relative ml-5 mt-5 h-5 w-5 rotate-90"
    }`;

    return (
        <>
            <div
                className="flex text-5xl font-semibold cursor-pointer"
                onClick={changeDisplay}>
                Algorithms
                <img className={menuSymbol} src={Arrow} />
            </div>
        </>
    );
};

export default Algorithms;
