
import ArticlePage from "@/components/ArticlePage";
import BackButton from "@/components/BackButton";
import { NOTFOUND_METADATA } from "@/constants";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}

export const dynamic = 'force-dynamic';

const checkValidUrl = (data: Article | undefined) => {
    if (!data) return false
    const articleData = {
        title: {
            has: 'title' in data,
            value: data.title
        },
        category: {
            has: 'category' in data,
            value: data.category
        },
        description: {
            has: 'description' in data,
            value: data.description
        },
        published_at: {
            has: 'published_at' in data,
            value: data.published_at
        },
        url: {
            has: 'url' in data,
            value: data.url
        }
    }
    return Object.values(articleData).every(item => item.has === true && item.value !== '')
}


export async function generateMetadata({ searchParams }: Props) {

    if (searchParams === undefined || (searchParams && Object.entries(searchParams).length === 0)) {
        return NOTFOUND_METADATA
    }

    const isValidUrl = checkValidUrl(searchParams)
    if (!isValidUrl) return NOTFOUND_METADATA;

    return {
        title: `${searchParams.title} | DEV NEWS`,
        description: `${searchParams.title}`,
    };
}

const Article = ({ searchParams }: Props) => {

    if (searchParams === undefined || (searchParams && Object.entries(searchParams).length === 0)) {
        console.log("searchParam not available");
        return notFound();
    }
    console.log("SearchParams=> ", searchParams);
    const isValidUrl = checkValidUrl(searchParams)

    if (!isValidUrl) {
        console.log("searchParam Invalid");
        return notFound();
    }

    return (
        <>
            <BackButton />
            <ArticlePage />
        </>
    )
}

export default Article