

import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"


type Props = {
    handleClick: Function,
    isNavOpen: boolean
}


const Navbar = ({ handleClick, isNavOpen }: Props) => {
    return (
        <div className="flex justify-between items-center p-5 md:p-x-8">

            <Link href="/" prefetch={false} className="font-serif text-2xl sm:text-4xl flex-grow">
                The {" "}<span className="underline decoration-orange-500">DEV</span>{" "} News
            </Link>

            <button className="md:hidden" onClick={() => handleClick()}>
                {!isNavOpen && <Bars3Icon className="w-6 md:w-8 h-6 sm:h-8 cursor-pointer" />}
            </button>
            <button className="hidden md:block">
               themeIcon
            </button>
        </div>
    )
}

export default Navbar
