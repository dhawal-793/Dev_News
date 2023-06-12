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

    const ImageAlt = article.title ? article.title : "News"
    const Description = article.description ? article.description : "";

    return (

        <>
            <article>
                <section className="flex flex-col w-full pb-24 mx-auto md:max-w-3xl lg:max-w-5xl ">
                    <h1 className="pt-5 pb-8 font-serif text-2xl tracking-wider capitalize xs:text-4xl sm:text-5xl lg:text-6xl text-dark dark:text-light">{article.title}</h1>
                    {article.image ? <img src={article.image} alt={ImageAlt} className="object-cover w-full rounded-lg shadow-md" /> :
                        <>
                            <img src="/Image_Not_Found_Dark.jpg" alt="Image Not ound" className="hidden object-cover w-full rounded-lg shadow-md dark:block" />
                            <img src="/Image_Not_Found_Light.jpg" alt="Image Not ound" className="block object-cover w-full rounded-lg shadow-md dark:hidden" />
                        </>
                    }
                    <div className="">
                        <div className="flex flex-wrap justify-between py-5 text-xs sm:divide-x-2 divide-light-primary sm:space-x-4">
                            <h2 className="w-full space-x-2 font-bold xs:w-1/2 sm:w-auto">
                                <span className="text-accent">  By:</span>
                                <span className="text-light-secondary">
                                    {article.author || "Unknown"}
                                </span>
                            </h2>
                            <h2 className="w-full space-x-2 font-bold xs:text-right sm:pl-4 xs:w-1/2 sm:w-auto">
                                <span className="text-accent">  Source:</span>
                                <span className="text-light-secondary">
                                    {article.source || "Unknown"}
                                </span>
                            </h2>
                            <p className="flex-1 w-full xs:text-right sm:text-left sm:pl-4 text-accent-primary dark:text-accent">
                                {article.published_at}
                            </p>
                        </div>
                        <p className="py-5 text-lg text-left break-words text-dark-primary dark:text-light-primary" dangerouslySetInnerHTML={{ __html: Description }}></p>
                        {article.url && <p className="text-article-dark-primary dark:text-article-light-primary">Read Whole Article <a href={article.url} className="text-accent hover:underline underline-offset-2" target="_blank">here</a>.</p>}
                    </div>
                </section>
            </article>
        </>
    )
}

export default ArticlePage;