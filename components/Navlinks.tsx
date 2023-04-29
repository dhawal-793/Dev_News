"use client"
import { XMarkIcon } from "@heroicons/react/24/solid"

import { usePathname } from "next/navigation"

import { categories } from "../constants"
import NavLink from "./NavLink"

type Props = {
    navOpen: boolean,
    handleClick: Function,
    className: string
}


const Navlinks = ({ navOpen, handleClick, className }: Props) => {
    const pathName = usePathname();
    const isActive = (path: string) => {
        return pathName?.split('/').pop() === path
    }
    return (

        <nav className={`gap-8 pb-5 md:justify-between mx-auto border-b ${className}`}>
            {navOpen && <button className="md:hidden absolute top-6 right-6" onClick={() => handleClick()}>
                <XMarkIcon className="text-gray-300 hover:text-red-500 w-8 h-8 cursor-pointer z-50" />
            </button>}
            {/* 
            Theme Button
            */}
            {categories.map((category) => (
                <NavLink key={category} category={category} isActive={isActive(category)} />
            ))}
        </nav>
    )
}

export default Navlinks