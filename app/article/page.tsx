
import ArticlePage from "@/components/ArticlePage";
import BackButton from "@/components/BackButton";
import { NOTFOUND_METADATA } from "@/constants";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}

const checkValidUrl = (searchParams: Article) => {
    const articleData = {
        title: {
            has: 'title' in searchParams,
            value: searchParams.title
        },
        category: {
            has: 'category' in searchParams,
            value: searchParams.category
        },
        country: {
            has: 'country' in searchParams,
            value: searchParams.country
        },
        description: {
            has: 'description' in searchParams,
            value: searchParams.description
        },
        language: {
            has: 'language' in searchParams,
            value: searchParams.language
        },
        published_at: {
            has: 'published_at' in searchParams,
            value: searchParams.published_at
        },
        url: {
            has: 'url' in searchParams,
            value: searchParams.url
        },
        source: {
            has: 'source' in searchParams,
            value: searchParams.source
        },
    }
    return Object.values(articleData).every(item => item.has === true && item.value !== '')
}


export async function generateMetadata({ searchParams }: Props) {

    if (!searchParams || Object.entries(searchParams).length === 0) {
        return NOTFOUND_METADATA
    }
    if (searchParams.title === null) return NOTFOUND_METADATA

    const isValidUrl = checkValidUrl(searchParams)
    if (!isValidUrl) return NOTFOUND_METADATA;

    return {
        title: `${searchParams.title.toUpperCase()} | DEV NEWS`,
        description: `${searchParams.title}`,
    };
}

const Article = ({ searchParams }: Props) => {

    if (!searchParams || Object.entries(searchParams).length === 0) {
        return notFound();
    }
    console.log("SearchParams=> ", searchParams);
    const isValidUrl = checkValidUrl(searchParams)

    if (!isValidUrl) return notFound();

    return (
        <>
            <BackButton />
            <ArticlePage />
        </>
    )
}

export default Article