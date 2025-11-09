import React from "react";
import HeadingBtn from "../ui/HeadingBtn";

// images
import iconOne from "../../assets/service-icon-one.png";
import iconTwo from "../../assets/service-icon-two.png";
import iconThree from "../../assets/service-icon-three.png";
import iconFour from "../../assets/service-icon-four.png";

const links = [
    {
        id: 1,
        icon: iconOne,
        title: "Financial Planning",
        para: "Ensure your financial health with our comprehensive financial planning and analysis services. We provide in-depth financial assessments.",
        link: "/",
    },
    {
        id: 2,
        icon: iconTwo,
        title: "Risk Management",
        para: "Protect your business with our risk management and compliance solutions. We identify potential risks and implement mitigation.",
        link: "/",
    },
    {
        id: 3,
        icon: iconThree,
        title: "Customer Experience",
        para: "Transform your customer interactions with our customer experience enhancement services. We analyze customer journeys.",
        link: "/",
    },
    {
        id: 4,
        icon: iconFour,
        title: "Product Development",
        para: "Stay ahead of the competition with our innovation and product development services. We help you generate new ideas.",
        link: "/",
    },
];

const About = () => {
    return (
        <section className="w-full py-10 sm:py-12 md:py-16 2xl:px-[200px] 2xl:py-[110px] bg-custom-font-white text-custom-font-black overflow-hidden">
            <div className="max-w-[1520px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-14 2xl:gap-[93px] items-center px-5 sm:px-8 2xl:px-0">
                {/* heading part */}
                <div className="flex flex-col items-start gap-5 md:gap-8 2xl:gap-12">
                    <HeadingBtn text={"Service"} />

                    <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-6 lg:gap-8 2xl:gap-16">
                        <h1 className="max-w-[779px] font-normal text-[40px] md:text-[50px] 2xl:text-[59px] leading-13 lg:leading-[83px] tracking-[-0.03em]">
                            Achieve Your Business Goals with Proven Expertise
                        </h1>
                        <p className="max-w-2xl font-light text-xs md:text-sm 2xl:text-base leading-6 2xl:leading-[33px] tracking-normal text-custom-font-black/63 ">
                            we bring years of proven expertise to the table,
                            empowering businesses to achieve their goals with
                            confidence. Our team of seasoned consultants has a
                            track record of delivering results across diverse
                            industries, providing you.
                        </p>
                    </div>
                </div>

                {/* service part */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-center gap-10 md:gap-12 2xl:gap-20">
                    {links.map((link, i) => (
                        <div
                            key={i}
                            className="max-w-[716px] flex flex-col items-start gap-5 md:gap-8 bg-custom-bg-gray px-6 py-4 md:px-8 md:py-8 rounded-2xl md:rounded-[20px] transition-all duration-300 border-4 border-custom-bg-gray hover:border-custom-font-primary"
                        >
                            <div className="flex items-center gap-5 md:gap-[33px]">
                                <img
                                    src={link.icon}
                                    alt="icon"
                                    draggable="false"
                                    className="px-4 py-3 bg-custom-bg-primary rounded-2xl"
                                />
                                <h3 className="font-normal text-md md:text-lg 2xl:text-2xl leading-none tracking-normal">
                                    {link.title}
                                </h3>
                            </div>

                            <p className="font-light text-xs md:text-sm 2xl:text-base text-custom-font-black/63">
                                {link.para}
                            </p>

                            <a href={link.link}>
                                <button className="text-base font-normal leading-[33px] tracking-normal cursor-pointer hover:underline hover:underline-offset-2">
                                    Learn More
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
