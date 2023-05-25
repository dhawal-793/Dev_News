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
        <header>
            <Navbar handleClick={handleClick} isNavOpen={showMenu} />
            <Navlinks handleClick={handleClick} navOpen={showMenu} className="py-5 my-12 hidden md:flex text-sm max-w-6xl" />
            <Navlinks handleClick={handleClick} navOpen={showMenu} className={` ${showMenu ? "translate-x-0" : "translate-x-80"} navLinks-md`} />
            <SearchBox />
        </header>
    )
}

export default Header