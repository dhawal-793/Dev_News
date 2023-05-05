'use client'

import { useRouter } from "next/navigation"

type Props = {
    article: Article
}

const ReadMoreButton = ({ article }: Props) => {
    const router = useRouter()
    const handleClick = () => {
        const QueryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`).join("&")
        const url = `/article?${QueryString}`
        router.push(url)
    }
    return (
        <button onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">Read More</button>
    )
}

export default ReadMoreButton