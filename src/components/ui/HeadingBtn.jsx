import React from "react";

const HeadingBtn = ({ text }) => {
    return (
        <div className="bg-custom-bg-primary text-custom-font-primary font-medium text-xs md:text-base px-8 md:px-10 2xl:px-15 py-4.5 2xl:py-6 rounded-full leading-none tracking-[0.32em]">
            {text}
        </div>
    );
};

export default HeadingBtn;
