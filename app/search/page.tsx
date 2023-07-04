import NewsList from "@/components/NewsList"
import SearchNotFound from "@/components/Errors/SearchNotFound"
import fetchNews from "@/lib/fetchNews"
import BackButton from "@/components/BackButton"
import Title from "@/components/Title"
import InvalidSearch from "@/components/Errors/InvalidSearch"

type Props = {
    searchParams: { term: string }
}

const searchPattern = /^[a-zA-Z0-9]+$/;

export async function generateMetadata({ searchParams }: Props) {
    const keyword = searchParams.term;

    // return Invalid if query not found or empty
    if (keyword === "" || keyword === undefined || !searchPattern.test(keyword)) {
        return {
            title: "Invalid Search Query",
            description: "Searched Query Not Valid, Please Enter A Valid Query"
        }
    }

    // Fetch data if empty, return Query Not Found argument 
    const news = await fetchNews('general', keyword, true)
    if (!news.data.length) {
        return {
            title: "No News Available related to Searched Query",
            description: "No News Available related to Searched Query, Please Enter A Different Query"
        }
    }

    return {
        title: `${keyword} | THE DEV NEWS`,
        description: `News related to - ${keyword} | THE DEV NEWS`,
    };
}


const SearchPage = async ({ searchParams }: Props) => {
    const keyword = searchParams?.term
    if (keyword === "" || keyword === undefined || !searchPattern.test(keyword)) {
        return <InvalidSearch />
    }

    const news = await fetchNews('general', keyword, true)
    return (
        <>
            <BackButton />
            <Title name="Search" value={keyword || ""} />
            {news.data.length ?
                <NewsList news={news} />
                :
                <SearchNotFound />
            }
        </>
    )
}

export default SearchPage