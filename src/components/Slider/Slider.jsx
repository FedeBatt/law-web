import React from "react";
import { SlideContainer, SlideContent } from "./Slider.styles";

const Slider = ({ children }) => {
    const breakPoints = [
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1120, itemsToShow: 3 },
    ];
    return (
        <SlideContainer>
            <SlideContent breakPoints={breakPoints}>{children}</SlideContent>
        </SlideContainer>
    );
};

export default Slider;
