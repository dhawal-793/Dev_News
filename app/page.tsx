import NewsList from "@/components/NewsList";
import { dummyNews } from "@/dummyNewsData";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
export default async function Home() {
  const news = dummyNews();
  // const news: NewsResponse = await fetchNews(categories.join(","));
  // console.log("News Data=>", news);
  // await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <NewsList news={news} />
  )
};