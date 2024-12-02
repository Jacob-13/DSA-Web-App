/*
    This component is a construction of the drop down menu
*/

import { Link } from "react-router-dom";

type DataStructuresProps = {
    size: number;
};

const AMenu = ({ size }: DataStructuresProps) => {
    // all tailwind classes for this component to prevent re-writing the same styling
    const wrappingDiv = `absolute border-2 p-2 mt-5 bg-gray-700 rounded-lg text-gray-200 w-[${size}px] z-10`;
    const linkClass = "text-xl w-full";
    const divClass = "bg-gray-600 my-2 p-1";

    return (
        <div className={wrappingDiv}>
            <Link to="/Sorting" className={linkClass}>
                <div className={divClass}>Sorting</div>
            </Link>
            <Link to="/Greedy" className={linkClass}>
                <div className={divClass}>Greedy</div>
            </Link>
            <Link to="/DFS" className={linkClass}>
                <div className={divClass}>Depth-First Search</div>
            </Link>
            <Link to="/BFS" className={linkClass}>
                <div className={divClass}>Breadth-First Search</div>
            </Link>
            <Link to="/BinarySearch" className={linkClass}>
                <div className={divClass}>Binary Search</div>
            </Link>
            <Link to="/BitManipulation" className={linkClass}>
                <div className={divClass}>Bit Manipulation</div>
            </Link>
            <Link to="/TwoPointers" className={linkClass}>
                <div className={divClass}>Two Pointers</div>
            </Link>
            <Link to="/PrefixSum" className={linkClass}>
                <div className={divClass}>Prefix Sum</div>
            </Link>
            <Link to="/SlidingWindow" className={linkClass}>
                <div className={divClass}>Sliding Window</div>
            </Link>
            <Link to="/Backtracking" className={linkClass}>
                <div className={divClass}>Backtracking</div>
            </Link>
            <Link to="/Enumeration" className={linkClass}>
                <div className={divClass}>Enumeration</div>
            </Link>
            <Link to="/UnionFind" className={linkClass}>
                <div className={divClass}>Union Find</div>
            </Link>
            <Link to="/More" className={linkClass}>
                <div className={divClass}>More</div>
            </Link>
        </div>
    );
};

export default AMenu;
