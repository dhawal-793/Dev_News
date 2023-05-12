'use client'

import { useSearchParams } from "next/navigation";

const ArticlePage = () => {
    const data = useSearchParams()
    const article: Article = {
        title: data.get('title'),
        author: data.get('author'),
        category: data.get('category'),
        country: data.get('country'),
        description: data.get('description'),
        image: data.get('image'),
        language: data.get('language'),
        published_at: data.get('published_at'),
        url: data.get('url'),
        source: data.get('source'),
    }

    const ImageSrc = article.image ? article.image : "/FAC.png";
    const Description = article.description ? article.description : "";

    return (

        <> 
            <article>
                <section className="flex flex-col pb-24 w-full mx-auto md:max-w-3xl lg:max-w-4xl">
                    <img src={ImageSrc} alt={article?.title ? article.title : "Unknown"} className="h-50 w-full  object-cover rounded-lg shadow-md" />
                    <div className="">
                        <h1 className="tracking-wider text-4xl font-serif capitalize pt-5 pb-8 border-b">{article.title}</h1>
                        <div className="flex flex-wrap justify-between sm:divide-x-2 divide-gray-400 sm:space-x-4 py-5">
                            <h2 className="font-bold w-1/2 sm:w-auto">By: {article.author || "Unknown"}</h2>
                            <h2 className="font-bold text-right sm:pl-4 w-1/2 sm:w-auto">Source: {article.source || "Unknown"}</h2>
                            <p className="w-full flex-1 text-right sm:text-left sm:pl-4">{article.published_at}</p>
                        </div>
                        <p className="py-5 text-lg" dangerouslySetInnerHTML={{ __html: Description }}></p>
                    </div>
                </section>
            </article>
        </>
    )
}

export default ArticlePage;