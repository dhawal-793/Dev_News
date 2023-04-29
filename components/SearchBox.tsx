'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const SearchBox = () => {
    const [input, setInput] = useState("")
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)
    }
    return (
        <form onSubmit={handleSubmit} className="my-5 rounded-md px-3  max-w-6xl mx-auto flex gap-5 justify-between items-center border group group-focus-within:border-orange-500">
            <input type="text"
                placeholder="Search Keywords..."
                className="w-full h-10  flex-1 outline-none bg-transparent placeholder:text-gray-400 text-gray-500 dark:text-orange-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"
                className="h-10 text-orange-500 disabled:text-gray-400 "
                disabled={!input}
            >SearchIcon
            </button>
        </form>
    )
}

export default SearchBox