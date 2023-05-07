'use client'
import ArticlePage from "@/components/ArticlePage";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation"

type Props = {
    searchParams?: Article;
}

const Article = ({ searchParams }: Props) => {

    // if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    //     return notFound();
    // }
    const data = useSearchParams();
    const articleData = {
        title: data.has('title'),
        author: data.has('author'),
        category: data.has('category'),
        country: data.has('country'),
        description: data.has('description'),
        image: data.has('image'),
        language: data.has('language'),
        published_at: data.has('published_at'),
        url: data.has('url'),
        source: data.has('source'),
    }
    const isValidUrl = Object.values(articleData).every(item => item === true)
    if (!isValidUrl) return notFound();

    return (
        <>
            <Link href="/">Home</Link>
            <ArticlePage />
        </>
    )
}

export default Article