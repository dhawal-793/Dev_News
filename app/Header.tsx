"use client"

import Navbar from "@/components/Navbar"
import Navlinks from "@/components/Navlinks"
import { useState } from "react"


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <header>
            <Navbar handleClick={handleClick} isNavOpen={showMenu} />
            <Navlinks handleClick={handleClick} navOpen={showMenu} className="hidden md:flex text-sm w-min max-w-6xl" />
            <Navlinks handleClick={handleClick} navOpen={showMenu} className={` ${showMenu ? "translate-x-0":"translate-x-80"} navLink-md`} />
        </header>
    )
}

export default Header