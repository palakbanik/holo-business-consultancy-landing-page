import React from "react";
import { MdOutlineStar } from "react-icons/md";

const HeroReview = ({ image, name, para }) => {
    return (
        <div className="flex items-center gap-[11px] bg-custom-font-white/25 backdrop-blur-3xl rounded-2xl px-4 py-2.5">
            <img src={image} alt="image" />

            <div className="flex flex-col items-start gap-[6px]">
                <h5 className="font-semibold text-sm leading-none tracking-normal text-custom-font-white">
                    {name}
                </h5>
                <p className="font-light text-[11px] leading-none tracking-normal">
                    {para}
                </p>

                <div className="flex text-[14px] text-custom-gold">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                </div>
            </div>
        </div>
    );
};

export default HeroReview;
