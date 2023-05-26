'use client'

import Link from "next/link"
import { MinusIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"


const BackButton = () => {
    const router = useRouter()

    return (
        <div className="m-3 mb-8 flex items-center w-fit text-light-secondary dark:text-light-secondary font-bold justify-between">
            <Link href="/" className="hover:text-accent border-b-2  border-accent">
                Home
            </Link>
            <MinusIcon className="rotate-90 w-8"></MinusIcon>
            <button onClick={() => router.back()} className="hover:text-accent border-b-2 border-accent">
                Back
            </button>
        </div>
    )
}

export default BackButton