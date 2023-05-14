import NewsList from "@/components/NewsList";
import { dummyNews } from "@/dummyNewsData";
// import fetchNews from "@/lib/fetchNews";

export default async function Home() {
  const news = dummyNews();
  // const news: NewsResponse = await fetchNews();
  // console.log("News Data=>", news);
  // await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <main>
      <NewsList news={news} />
    </main>
  )
}



// 'use client'
// import NewsList from "@/components/NewsList";
// import ArticleLoader from "@/components/loaders/ArticleLoader";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <main className="">
//         <NewsList />
//       {/* <Suspense fallback={<ArticleLoader />}>
//       </Suspense> */}
//     </main>
//   )
// }