import React from "react";

const Range = ({ text, range }) => {
    return (
        <div className="w-full flex flex-col items-start gap-4 2xl:gap-[33px]">
            <p className="font-normal text-xs 2xl:text-xl leading-none tracking-normal">
                {text}
            </p>

            <div className="w-full flex items-center gap-5">
                <div className="flex-1 w-full h-1 bg-[#818181]">
                    <div
                        className={`w-[${range}%] h-full bg-linear-to-r from-custom-bg-primary to-custom-font-primary relative`}
                    >
                        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-custom-font-white border-4 border-custom-font-primary absolute right-0 -top-1 md:-top-2"></div>
                    </div>
                </div>

                <p className="font-medium text-custom-font-white/54 text-xs 2xl:text-xl leading-none tracking-normal">
                    {range}%
                </p>
            </div>
        </div>
    );
};

export default Range;
