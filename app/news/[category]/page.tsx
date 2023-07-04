import BackButton from "@/components/BackButton"
import NewsList from "@/components/NewsList"
import Title from "@/components/Title"
import { NOTFOUND_METADATA, categories } from "@/lib/constants"
import fetchNews from "@/lib/fetchNews"
import { notFound } from "next/navigation"

type Props = {
  params: { category: Category }
}

export async function generateMetadata({ params: { category } }: Props) {
  if (!categories.includes(category)) {
    return NOTFOUND_METADATA
  }

  return {
    title: `${category.toUpperCase()} | THE DEV NEWS`,
    description: `News related to - ${category} category | THE DEV NEWS`,
  };
}


const NewsByCategory = async ({ params: { category } }: Props) => {
  if (!categories.includes(category)) { return notFound() }
  const news = await fetchNews(category)
  return (
    <>
      <BackButton />
      <Title name="Category" value={category} />
      <NewsList news={news} />
    </>
  )
}

export default NewsByCategory