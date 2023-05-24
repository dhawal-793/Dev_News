'use client'

import Link from "next/link"
import { MinusIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"


const BackButton = () => {
    const router = useRouter()

    return (
        <div className="m-3 mb-8 flex items-center w-fit  text-gray-600 dark:text-gray-500 font-bold justify-between">
            <Link href="/" className="hover:text-orange-400 border-b-2 pb-1 border-orange-400">
                Home
            </Link>
            <MinusIcon className="rotate-90 w-9"></MinusIcon>
            <button onClick={() => router.back()} className="hover:text-orange-400 border-b-2 pb-1 border-orange-400">
                Back
            </button>
        </div>
    )
}

export default BackButton