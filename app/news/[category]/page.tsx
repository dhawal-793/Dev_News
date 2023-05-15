import NewsList from "@/components/NewsList"
import fetchNews from "@/lib/fetchNews"
import { notFound } from "next/navigation"

type Props = {
  params: { category: Category }
}

const NewsByCategory = async ({ params: { category } }: Props) => {
  const categories = ["general", "buisness", "entertainment", "health", "science", "sports", "technology"];
  if (!categories.includes(category)) { return notFound() }
  const news = await fetchNews(category)
  return (
    <>
      <h1 className="capitalize border-b-2 pb-2 w-fit border-orange-400 font-serif font-semibold text-4xl
            "> {category}</h1>
      <NewsList news={news} />
    </>
  )
}

export default NewsByCategory