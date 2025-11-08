import React from "react";

const GreenHeadingText = ({ text }) => {
    return (
        <h5 className="font-medium text-xs 2xl:text-base leading-none tracking-[.32em] text-custom-font-primary">
            {text}
        </h5>
    );
};

export default GreenHeadingText;
