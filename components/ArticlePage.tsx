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
                <section className="flex flex-col pb-24 w-full mx-auto md:max-w-3xl lg:max-w-5xl ">
                    <h1 className="tracking-wider text-2xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif capitalize pt-5 pb-8 text-dark dark:text-light">{article.title}</h1>
                    <img src={ImageSrc} alt={article.title ? article.title : "Image not Available"} className=" w-full  object-cover rounded-lg shadow-md" />
                    <div className="">
                        <div className="text-xs flex flex-wrap justify-between sm:divide-x-2 divide-light-primary sm:space-x-4 py-5">
                            <h2 className="font-bold w-full xs:w-1/2 sm:w-auto space-x-2">
                                <span className="text-accent">  By:</span>
                                <span className="text-light-secondary">
                                    {article.author || "Unknown"}
                                </span>
                            </h2>
                            <h2 className="font-bold xs:text-right sm:pl-4 w-full xs:w-1/2 sm:w-auto space-x-2">
                                <span className="text-accent">  Source:</span>
                                <span className="text-light-secondary">
                                    {article.source || "Unknown"}
                                </span>
                            </h2>
                            <p className="w-full flex-1 xs:text-right sm:text-left sm:pl-4 text-accent-primary dark:text-accent">
                                {article.published_at}
                            </p>
                        </div>
                        <p className="py-5 text-lg text-left break-words text-dark-primary dark:text-light-primary" dangerouslySetInnerHTML={{ __html: Description }}></p>
                    </div>
                </section>
            </article>
        </>
    )
}

export default ArticlePage;