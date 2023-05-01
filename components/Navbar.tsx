import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"


type Props = {
    handleClick: Function,
    isNavOpen: boolean
}


const Navbar = ({ handleClick, isNavOpen }: Props) => {
    return (
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center dark:text-gray-100">
            <Link href="/" prefetch={false} className="font-serif text-2xl sm:text-4xl flex-grow ">
                <h1>
                    The {" "}<span className="underline decoration-orange-400">DEV</span>{" "} News
                </h1>
            </Link>
            <button className="md:hidden" onClick={() => handleClick()}>
                {!isNavOpen && <Bars3Icon className="w-6 md:w-8 h-6 sm:h-8 cursor-pointer dark:text-gray-100" />}
            </button>
            <button className="hidden md:block">
                themeIcon
            </button>
        </div>
    )
}

export default Navbar