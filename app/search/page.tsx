import NewsList from "@/components/NewsList"
import SearchNotFound from "@/components/Errors/SearchNotFound"
import fetchNews from "@/lib/fetchNews"
import BackButton from "@/components/BackButton"


type Props = {
    searchParams?: { term: string }
}

const SearchPage = async ({ searchParams }: Props) => {
    const news = await fetchNews('general', searchParams?.term, true)
    return (
        <>
            <BackButton />
            <h1 className="capitalize border-b-2 pb-2 w-fit border-orange-400 font-serif font-semibold text-4xl
            ">Search Results for: {searchParams?.term}</h1>
            {news.data.length ?
                <NewsList news={news} />
                :
                <SearchNotFound />
            }
        </>
    )
}

export default SearchPage