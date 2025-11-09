import React from "react";
import aboutImg from "../../assets/about-img-one.png";
import GreenHeadingText from "../ui/GreenHeadingText";
import BigHeadingText from "../ui/BigHeadingText";
import ParaText from "../ui/ParaText";
import PrimaryButton from "../ui/PrimaryButton";
import Range from "../ui/Range";

const About = () => {
    return (
        <section className="w-full bg-custom-bg-primary text-custom-font-white px-4 md:px-16 2xl:px-[200px] py-12 lg:py-25 2xl:py-[161px] overflow-hidden">
            <div className="w-full max-w-[1520px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:gap-12 lg:gap-14 xl:gap-[97px] relative z-10">
                <div className="w-full max-w-[568px] h-full max-h-[568px] bg-custom-font-primary/10 rounded-full absolute -bottom-30 -left-20 blur-3xl animate-pulse"></div>
                {/* image content */}
                <div>
                    <img
                        src={aboutImg}
                        alt="about us"
                        className="mb-7 md:mb-0"
                    />
                </div>

                {/* text content */}
                <div className="w-full max-w-[600px] 2xl:max-w-[767px]">
                    {/* heading text */}
                    <div className="flex flex-col items-start gap-3 md:gap-7">
                        <GreenHeadingText text={"About Us"} />

                        <BigHeadingText
                            mainText={"Tailored Consultancy Solutions for "}
                            spanText={"Every Business"}
                        />
                        <ParaText
                            text={
                                "We understand that no two businesses are the same. That’s why we offer personalized consultancy solutions designed to meet the specific needs and goals of your company."
                            }
                        />
                    </div>

                    {/* range */}
                    <div className="w-full flex flex-col items-start gap-10 mt-11.5 mb-[58px]">
                        <Range
                            text={"Market Expansion Consulting"}
                            range={"90"}
                        />
                        <Range
                            text={"Digital Transformation Solutions"}
                            range={"85"}
                        />
                        <Range
                            text={"Operational Efficiency Optimization"}
                            range={"97"}
                        />
                    </div>

                    <PrimaryButton text={"Learn More"} />
                </div>
            </div>
        </section>
    );
};

export default About;
