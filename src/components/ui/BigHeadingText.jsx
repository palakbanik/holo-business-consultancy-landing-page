import React from "react";

const BigHeadingText = ({ mainText, spanText }) => {
    return (
        <h1 className="font-normal text-[30px] md:text-[40px] xl:text-[50px] leading-10 sm:leading-14 md:leading-16 2xl:leading-[83px] tracking-[-0.03em] mb-3 lg:mb-10">
            {mainText}
            <span className="text-custom-font-primary italic"> {spanText}</span>
        </h1>
    );
};

export default BigHeadingText;
