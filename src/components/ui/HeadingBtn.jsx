import React from "react";

const HeadingBtn = ({ text }) => {
    return (
        <div className="bg-custom-bg-primary text-custom-font-primary font-medium text-xs md:text-base px-6 py-3 md:px-10 md:py-4 xl:px-15 xl:py-6 rounded-full leading-none tracking-[0.32em]">
            {text}
        </div>
    );
};

export default HeadingBtn;
