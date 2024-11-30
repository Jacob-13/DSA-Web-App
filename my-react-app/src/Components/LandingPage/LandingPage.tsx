/*
    Need to have the css h-full here so that the container for the landing page is the size of the page, and not just fit to the content within it.
        This is important because if we add the LandingText and then try h-1/2, it doesnt move since the LandingPage is just snapped to the height of the   
        LandingText, and not the page.
*/

import LandingText from "./LandingText";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingText />
        </div>
    );
};

export default LandingPage;
