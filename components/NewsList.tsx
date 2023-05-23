'use client'
import Article from "./Article"
import GridLayout from "./Layouts/GridLayout"


type Props = {
    news: NewsResponse
}

const NewsList = ({ news }: Props) => {
    return (
        <GridLayout>
            {
                news.data.map(article => {
                    return (
                        <Article key={article.title} article={article} />
                    )
                })
            }
        </GridLayout>
    )
}

export default NewsList








// import Article from "./Article"
// import { dummyNews } from "@/dummyNewsData";
// import ArticleLoader from "./loaders/ArticleLoader";
// import fetchNews from "@/lib/fetchNews";

// export default async function NewsList  ()  {

//     // const news: NewsResponse = dummyNews;
//     const news: NewsResponse  =await fetchNews();
//     // console.log("News Data=>", news);
//     return (
//         <main className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 ">
//             {news.data.map(article => {
//                 return (
//                     // <ArticleLoader key={article.title} />
//                     <Article key={article.title} article={article} />
//                 )
//             })}
//         </main>
//     )
// }
