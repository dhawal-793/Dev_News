import ReadMoreButton from "./ReadMoreButton"

type Props = {
    article: Article
}

const Article = ({ article }: Props) => {
    const ImageSrc = article.image ? article.image : "/FAC.png"
    return (
        <article className="bg-slate-200 dark:bg-slate-800 flex flex-col shadow-md shadow-slate-400 dark:shadow-slate-700 hover:shadow-xl hover:shadow-slate-400 dark:hover:shadow-slate-700 hover:bg-slate-300/70 dark:hover:bg-slate-700/50 transition-all duration-200 ease-out rounded-lg max-w-md mx-auto">
            <img src={ImageSrc} alt={article.title} loading="lazy" className="h-60 w-full object-cover rounded-t-lg " />
            <div className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-bold font-serif ">{article.title}</h2>
                    <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-3">{article.description}</p>
                    </section>
                    <footer className="text-xs text-right ml-auto flex space-x-2 pt-5 italic text-gray-600 dark:text-gray-400">
                        <p>{article.source} -</p>
                        <p>{article.published_at}</p>
                    </footer>
                </div>
                <ReadMoreButton article={article} />
            </div>
        </article>
    )
}

export default Article;