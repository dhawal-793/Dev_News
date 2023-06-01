'use client'

import Navbar from "@/components/Navbar"
import Navlinks from "@/components/Navlinks"
import SearchBox from "@/components/SearchBox"
import { useState } from "react"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(prev => !prev);
    }

    return (
        <>
            <header className="fixed z-[60] left-0 top-0 w-full ">
                <div className="bg-light dark:bg-dark px-5 pt-5 pb-2 transition-all duration-1000">
                    <Navbar handleClick={handleClick} isNavOpen={showMenu} />
                    <Navlinks handleClick={handleClick} navOpen={showMenu} className="py-2 my-4 hidden md:flex text-sm max-w-6xl" />
                    <Navlinks handleClick={handleClick} navOpen={showMenu} className={` ${showMenu ? "translate-x-0" : "translate-x-80"} navLinks-md`} />
                    <SearchBox />
                </div>
                <BlurdArea />
            </header>
            <div className="h-[148.800px] sm:h-[152.800px] md:h-[237.600px]" />
        </>
    )
}

export default Header


const BlurdArea = () => {
    return (
        <div className="">
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[1]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.95]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.9]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.85]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.8]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.75]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.7]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.65]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.6]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.55]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.5]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.45]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.4]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.35]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.3]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.25]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.2]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.15]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.1]" />
            <div className="bg-light dark:bg-dark transition-all duration-1000 h-[0.8px] opacity-[0.05]" />
        </div>
    )
}