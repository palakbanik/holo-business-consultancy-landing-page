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
        <section className="w-full py-10 sm:py-12 md:py-25 2xl:px-[200px] 2xl:py-[110px] bg-custom-font-white text-custom-font-black overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-16 2xl:px-0 flex flex-col gap-10 md:gap-12 lg:gap-14 2xl:gap-[93px] items-center">
                {/* heading part */}
                <div className="flex flex-col items-start gap-5 md:gap-8 2xl:gap-12">
                    <HeadingBtn text={"Service"} />

                    <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 xl:gap-16">
                        <h1 className="font-normal text-[38px] md:text-[50px] 2xl:text-[59px] leading-11 md:leading-16 xl:leading-[83px] tracking-[-0.03em]">
                            Achieve Your Business <br /> Goals with Proven
                            Expertise
                        </h1>
                        <p className="w-full max-w-[550px] xl:max-w-xl font-light text-xs md:text-sm 2xl:text-base leading-6 2xl:leading-[33px] tracking-normal text-custom-font-black/63 ">
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
                            className="w-full h-full max-w-[716px] flex flex-col items-start gap-5 md:gap-8 bg-custom-bg-gray px-6 py-4 md:px-8 md:py-8 rounded-2xl md:rounded-[20px] transition-all duration-300 border-4 border-custom-bg-gray hover:border-custom-font-primary"
                        >
                            <div className="w-full h-full flex items-center gap-4 md:gap-6 xl:gap-[33px]">
                                <img
                                    src={link.icon}
                                    alt="icon"
                                    draggable="false"
                                    className="px-2 py-1.5 xl:px-4 xl:py-3 bg-custom-bg-primary rounded-lg md:rounded-2xl"
                                />
                                <h3 className="font-normal text-base sm:text-base md:text-lg 2xl:text-2xl leading-none tracking-normal">
                                    {link.title}
                                </h3>
                            </div>

                            <p className="font-light text-xs xl:text-base leading-5 xl:leading-[33px] tracking-normal text-custom-font-black/63">
                                {link.para}
                            </p>

                            <a href={link.link}>
                                <button className="text-sm xl:text-base font-normal leading-[33px] tracking-normal cursor-pointer hover:underline hover:underline-offset-2">
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
