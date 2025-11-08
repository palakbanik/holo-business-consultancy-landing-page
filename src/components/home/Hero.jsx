import React from "react";
// images
import heroMainImg from "../../assets/hero-main-img.png";
import heroReviewOne from "../../assets/hero-review-img-one.png";
import heroReviewTwo from "../../assets/hero-review-img-two.png";
import heroArrowIcon from "../../assets/hero-arrow-icon.png";
import heroLogoOne from "../../assets/hero-logo-one.svg";
import heroLogoTwo from "../../assets/hero-logo-two.svg";
import heroLogoThree from "../../assets/hero-logo-three.svg";
// components
import GreenHeadingText from "../ui/GreenHeadingText";
import PrimaryButton from "../ui/PrimaryButton";
import HeroReview from "../ui/HeroReview";

const logos = [
    { id: 1, logo: heroLogoOne },
    { id: 2, logo: heroLogoTwo },
    { id: 3, logo: heroLogoThree },
    { id: 4, logo: heroLogoOne },
    { id: 5, logo: heroLogoTwo },
    { id: 6, logo: heroLogoThree },
];

const Hero = () => {
    return (
        <section className="w-full h-auto pt-[120px] md:pt-[226px] pb-[162px] bg-custom-bg-primary text-custom-font-white overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-5 sm:px-8 2xl:px-0 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 lg:gap-[97px] relative">
                {/* blobs */}
                <div className="w-full max-w-[568px] h-full max-h-[568px] bg-custom-font-primary/10 rounded-full absolute -top-50 -right-24 blur-3xl animate-pulse"></div>
                <div className="w-full max-w-[568px] h-full max-h-[568px] bg-custom-font-primary/10 rounded-full absolute -bottom-50 right-80 blur-3xl animate-pulse hidden md:block"></div>
                {/* img side */}
                <div className="w-full h-auto z-10 relative">
                    <div className="absolute bottom-[104px] left-0 2xl:-left-[72px]">
                        <HeroReview
                            image={heroReviewOne}
                            name={"George"}
                            para={"Project Manager"}
                        />
                    </div>
                    <div className="absolute top-[104px] right-0 sm:right-17 md:right-0 lg:right-2 2xl:right-0">
                        <HeroReview
                            image={heroReviewTwo}
                            name={"Natasha"}
                            para={"Graphic Designer"}
                        />
                    </div>
                    <img src={heroMainImg} alt="hero image" />
                </div>

                {/* text side */}
                <div className="w-full max-w-3xl z-10">
                    {/* text part */}
                    <div className="flex flex-col items-start justify-between pb-[53px]">
                        <div className="mb-4 2xl:mb-7.5">
                            <GreenHeadingText text={"Business Consultancy"} />
                        </div>

                        <h1 className="font-normal text-[40px] lg:text-[59px] leading-14 sm:leading-16 xl:leading-21 tracking-[-0.03em] mb-3 lg:mb-10">
                            Innovative Approaches for Modern
                            <span className="text-custom-font-primary italic">
                                {" "}
                                Business Success
                            </span>
                        </h1>

                        <p className="font-extralight text-base leading-5 2xl:leading-7.5 tracking-normal text-custom-font-white/70">
                            We believe that in today’s fast-paced business
                            landscape, innovation is key to staying ahead. Our
                            team of seasoned consultants brings fresh,
                            forward-thinking strategies.
                        </p>
                    </div>

                    {/* button part */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-[47px]">
                        <a href="/">
                            <PrimaryButton text={"Book a Consultation"} />
                        </a>
                        <a
                            href="/"
                            className="flex items-center gap-4 cursor-pointer"
                        >
                            <img
                                src={heroArrowIcon}
                                alt="arrow icon"
                                draggable="false"
                            />
                            <button className="font-normal text-sm xl:text-base leading-none tracking-normal text-custom-font-white cursor-pointer">
                                Request a Demo
                            </button>
                        </a>
                    </div>

                    {/* logos part  */}
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 mt-20 xl:mt-[100px]">
                        {logos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo.logo}
                                alt="logo"
                                draggable="false"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
