"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    const [header, setHeader] = useState("bg-[#0b72ff] text-white");
    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("bg-white")
            : setHeader("bg-[#0b72ff] text-white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    });

    return (
        <nav
            className={`${pathname === "/" ? header : "bg-white border-b border-slate-200"} z-50 transition-all duration-300 sticky top-0`}
        >
            <div className="w-full h-[5rem] flex justify-between items-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
                <div>
                    <h1 className="text-xl font-semibold">409Avaluation</h1>
                </div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
