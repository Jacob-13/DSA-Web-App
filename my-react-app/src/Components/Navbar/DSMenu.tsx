/*
    This component is a construction of the drop down menu
*/

import { Link } from "react-router-dom";

const DSMenu = () => {
    // all tailwind classes for this component to prevent re-writing the same styling
    const wrappingDiv = `absolute border-2 p-2 max-h-80 overflow-y-scroll mt-5 bg-gray-700 rounded-lg text-gray-200 z-10`;
    const linkClass = "text-xl w-full font-semibold";
    const divClass =
        "bg-gray-600 my-2 p-1 pr-14 hover:bg-gray-500 transition duration-300 linear";

    return (
        <div className={wrappingDiv}>
            <Link to="/String" className={linkClass}>
                <div className={divClass}>String</div>
            </Link>
            <Link to="/Array" className={linkClass}>
                <div className={divClass}>Array</div>
            </Link>
            <Link to="/Matrix" className={linkClass}>
                <div className={divClass}>Matrix</div>
            </Link>
            <Link to="/Stack" className={linkClass}>
                <div className={divClass}>Stack</div>
            </Link>
            <Link to="/Queue" className={linkClass}>
                <div className={divClass}>Queue</div>
            </Link>
            <Link to="/LinkedList" className={linkClass}>
                <div className={divClass}>Linked List</div>
            </Link>
            <Link to="/HashTable" className={linkClass}>
                <div className={divClass}>Hash Table</div>
            </Link>
            <Link to="/Tree" className={linkClass}>
                <div className={divClass}>Tree</div>
            </Link>
            <Link to="/BinaryTree" className={linkClass}>
                <div className={divClass}>Binary Tree</div>
            </Link>
            <Link to="/BinarySearchTree" className={linkClass}>
                <div className={divClass}>Binary Search Tree</div>
            </Link>
            <Link to="/Heap" className={linkClass}>
                <div className={divClass}>Heap</div>
            </Link>
            <Link to="/Trie" className={linkClass}>
                <div className={divClass}>Trie</div>
            </Link>
            <Link to="/HashTable" className={linkClass}>
                <div className={divClass}>Hash Table</div>
            </Link>
            <Link to="/Graph" className={linkClass}>
                <div className={divClass}>Graph</div>
            </Link>
        </div>
    );
};

export default DSMenu;
