/*
    Component used for the functionality of the algorithms option within the navbar
    The option allows users to view a dropdown menu of each algorithm that will bring them to a page
    with details for that specific algorithm
*/

import Arrow from "../../assets/LandingPage/Black-Arrow.png";

type AlgorithmsProps = {
    display: boolean;
    changeDisplay: () => void;
};

const Algorithms = ({ display, changeDisplay }: AlgorithmsProps) => {
    // use the props to change how the triangle rotates

    function handleClick() {
        changeDisplay();
    }

    // This is the tailwindcss classname used for the dropdown arrow. The conditional allows for the rotation, should add an animation as finishing touch
    const menuSymbol = `${
        display
            ? "relative ml-5 mt-5 h-5 w-5"
            : "relative ml-5 mt-5 h-5 w-5 rotate-90"
    }`;

    return (
        <>
            <div
                className="flex text-5xl font-semibold cursor-pointer"
                onClick={() => handleClick()}>
                Algorithms
                <img className={menuSymbol} src={Arrow} />
            </div>
        </>
    );
};

export default Algorithms;
