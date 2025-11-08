import React from "react";

const PrimaryButton = ({ text }) => {
    return (
        <button className="bg-custom-font-primary text-custom-bg-primary text-sm xl:text-base font-medium leading-none tracking-normal px-6 py-3 md:px-[37px] md:py-[17px] rounded-xl hover:bg-transparent hover:text-custom-font-primary border-2 border-custom-font-primary duration-300 cursor-pointer">
            {text}
        </button>
    );
};

export default PrimaryButton;
