'use client'
import ArticlePage from "@/components/ArticlePage";
import Link from "next/link";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}

const Article = ({ searchParams }: Props) => {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }

    return (
        <>
            <Link href="/">Home</Link>
            <ArticlePage />
        </>
    )
}

export default Article