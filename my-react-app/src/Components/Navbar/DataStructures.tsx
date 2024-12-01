/*
    Component used for the functionality of the Data Structures option within the navbar
    The option allows users to view a dropdown menu of each data structure that will bring them to a page
    with details for that specific data structure

    For the drop down state, should be controlled through the parent component becuase when the algorithms one is clicked it should also close this one
*/
import Arrow from "../../assets/LandingPage/Black-Arrow.png";

type DataStructuresProps = {
    display: boolean;
    changeDisplay: () => void;
};

const DataStructures = ({ display, changeDisplay }: DataStructuresProps) => {
    // might need to add a useEffect to re-render

    function handleClick() {
        changeDisplay();
    }

    const menuSymbol = `${
        display
            ? "relative ml-5 mt-5 h-5 w-5"
            : "relative ml-5 mt-5 h-5 w-5 rotate-90"
    }`;

    return (
        <>
            <div
                className="flex w-fit text-5xl font-semibold cursor-pointer"
                onClick={() => handleClick()}
            >
                Data Structures
                <img className={menuSymbol} src={Arrow} />
            </div>
        </>
    );
};

export default DataStructures;
