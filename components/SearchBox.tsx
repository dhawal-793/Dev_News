'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const SearchBox = () => {
    const [input, setInput] = useState("")
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)
    }
    return (
        <form onSubmit={handleSubmit} className="mt-10 mb-5 md:mt-5 px-3 max-w-6xl mx-auto flex gap-5 justify-between items-center focus:text-orange-300 border-gray-500 dark:border-gray-100 border-b-2 md:border md:rounded-md">
            <input type="text"
                placeholder="Search Keywords..."
                className="w-full h-10  flex-1 outline-none bg-transparent placeholder:text-gray-400 text-zinc-600 dark:text-orange-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"
                className="h-10 text-orange-400 disabled:text-gray-400 "
                disabled={!input}
            >
                <MagnifyingGlassIcon className="w-5 h-5 "/>
            </button>
        </form>
    )
}

export default SearchBox