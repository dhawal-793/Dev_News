'use client'
import { XMarkIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"
import { categories } from "../lib/constants"
import NavLink from "./NavLink"
import ThemeButton from "./ThemeButton"

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
        <nav className={`pb-5 md:justify-between mx-auto border-light border-b ${className}`}>
            {navOpen &&
                <div className="md:hidden absolute top-5 left-0 w-full px-5 flex justify-between">
                    <ThemeButton />
                    <button className="block" onClick={() => handleClick()}>
                        <XMarkIcon className="text-light hover:text-cancel w-8 h-8 cursor-pointer z-50" />
                    </button>
                </div>
            }
            {categories.map((category) => (
                <NavLink key={category} category={category} isActive={isActive(category)} />
            ))}
        </nav>
    )
}

export default Navlinks

