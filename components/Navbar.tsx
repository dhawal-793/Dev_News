import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import ThemeButton from "./ThemeButton"

type Props = {
    handleClick: Function,
    isNavOpen: boolean
}

const Navbar = ({ handleClick, isNavOpen }: Props) => {
    return (
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-dark dark:text-light">
            <Link href="/" prefetch={false} className="font-serif  cursor-default">
                <h1 className="cursor-pointer text-2xl sm:text-4xl">
                    The {" "}<span className="underline decoration-accent text-[2.75rem]">DEV</span>{" "} News
                </h1>
            </Link>
            <button className="md:hidden" onClick={() => handleClick()}>
                {!isNavOpen && <Bars3Icon className="w-6 md:w-8 h-6 sm:h-8 cursor-pointer " />}
            </button>
            <div className="hidden md:block">
                <ThemeButton />
            </div>
        </div>
    )
}

export default Navbar