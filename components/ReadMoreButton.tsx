'use client'

import Link from "next/link"

type Props = {
    article: Article
}

const ReadMoreButton = ({ article }: Props) => {

    // const router = useRouter()
    // const queryString = Object.entries(article)
    //     .map(([key, value]) => {
    //         console.log('key ', key)
    //         return (`${key}=${value}`)
    //     }).join("&")
    // const handleClick = () => {
    //     const url = `/article?${queryString}`
    //     console.log("Url =>", url);
    //     // router.push(url)
    // }
    return (
        <Link href={{
            pathname: '/article',
            query: article

        }}
            prefetch={false}
            className="flex justify-center items-center bg-accent h-10 rounded-b-lg text-article-dark hover:bg-accent-primary">Read More</Link>
        // <button onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg dark:text-zinc-800 hover:bg-orange-500">Read More</button>
    )
}

export default ReadMoreButton