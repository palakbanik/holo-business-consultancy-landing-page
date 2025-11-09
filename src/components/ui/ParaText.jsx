import React from "react";

const ParaText = ({ text }) => {
    return (
        <p className="font-[275] text-xs md:text-sm xl:text-base leading-5 md:leading-6 xl:leading-7.5 tracking-normal text-custom-font-white/70">
            {text}
        </p>
    );
};

export default ParaText;
