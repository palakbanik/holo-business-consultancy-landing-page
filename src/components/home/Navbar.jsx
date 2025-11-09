import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import PrimaryButton from "../ui/PrimaryButton";

const links = [
    { id: 1, title: "Our Solutions", link: "/" },
    { id: 2, title: "See Pricing", link: "/" },
    { id: 3, title: "Meet the Team", link: "/" },
    { id: 4, title: "How It Works", link: "/" },
];

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <header className="w-full h-auto py-6 md:py-0 md:mt-10 fixed -top-7 md:top-0 left-0 right-0 z-50">
            <nav className="max-w-[1520px] mx-auto px-5 sm:px-8 md:px-16 py-5 md:py-0 2xl:px-0 flex flex-col relative bg-custom-bg-primary/30 text-custom-font-white backdrop-blur-md md:rounded-[14px]">
                <div className="w-full flex items-center justify-between">
                    {/* logo */}
                    <a href="/">
                        <h1 className="italic font-semibold text-xl md:text-2xl leading-7.5 tracking-normal">
                            Holo
                        </h1>
                    </a>

                    {/* mobile menu */}

                    <button
                        className="font-bold text-2xl md:hidden"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                    >
                        {isOpenMenu ? <IoCloseOutline /> : <CiMenuFries />}
                    </button>

                    {/* desktop nav link */}
                    <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                        {links.map((link, i) => (
                            <li
                                key={i}
                                className="font-inter font-normal text-sm xl:text-base leading-none tracking-normal cursor-pointer transition-all duration-300 hover:text-custom-font-primary hover:scale-110"
                            >
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* sign in btn */}
                    <div className="hidden md:flex items-center gap-[68px]">
                        <a href="/">
                            <button className="font-medium text-sm xl:text-base leading-none tracking-normal bg-transparent border-2 border-transparent rounded-xl px-[37px] py-[17px] hover:border-custom-font-primary hover:text-custom-font-primary duration-300 cursor-pointer">
                                Sign In
                            </button>
                        </a>
                        <a href="/">
                            <PrimaryButton text={"Sign Up"} />
                        </a>
                    </div>
                </div>

                {/* mobile nav links */}
                <div
                    className={`w-full h-[70vh] md:hidden py-5 bg-custom-bg-primary/90 text-custom-font-white flex flex-col items-center justify-center absolute top-17 ${
                        isOpenMenu ? "left-0" : "-left-full"
                    } duration-300`}
                >
                    <ul className="flex flex-col items-center justify-center gap-10">
                        {links.map((link, i) => (
                            <li
                                key={i}
                                onClick={() => setIsOpenMenu(false)}
                                className="font-inter font-normal text-lg leading-none tracking-normal"
                            >
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
