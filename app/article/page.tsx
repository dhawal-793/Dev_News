'use client'
import ArticlePage from "@/components/ArticlePage";
import BackButton from "@/components/BackButton";
import { notFound, useSearchParams } from "next/navigation"

// type Props = {
//     searchParams?: Article;
// }

const Article = () => {

    // if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    //     return notFound();
    // }
    const data = useSearchParams();
    const articleData = {
        title: {
            has: data.has('title'),
            value: data.get('title')
        },
        category: {
            has: data.has('category'),
            value: data.get('category')
        },
        country: {
            has: data.has('country'),
            value: data.get('country')
        },
        description: {
            has: data.has('description'),
            value: data.get('description')
        },
        language: {
            has: data.has('language'),
            value: data.get('language')
        },
        published_at: {
            has: data.has('published_at'),
            value: data.get('published_at')
        },
        url: {
            has: data.has('url'),
            value: data.get('url')
        },
        source: {
            has: data.has('source'),
            value: data.get('source')
        },
    }
    const isValidUrl = Object.values(articleData).every(item => item.has === true && item.value !== '')
    if (!isValidUrl) return notFound();

    return (
        <>
            <BackButton />
            <ArticlePage />
        </>
    )
}

export default Article