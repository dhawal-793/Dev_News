
import NewsList from "@/components/NewsList";
import { dummyNews } from "@/dummyNewsData";
// import fetchNews from "@/lib/fetchNews";

export default async function Home() {

  // const news: NewsResponse = await fetchNews();
  // console.log("News Data=>", news);

  return (
    <main className="">
      <NewsList news={dummyNews} />
    </main>
  )
}