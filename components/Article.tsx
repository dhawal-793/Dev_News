import ReadMoreButton from "./ReadMoreButton"
type Props = {
    article: Article
}

const Article = ({ article }: Props) => {
    const ImageSrc = article.image ? article.image : "/FAC.png"
    const ImageAlt = article.title ? article.title : "News"

    return (
        <article className="bg-article-light dark:bg-article-dark flex flex-col shadow-md shadow-article-light-secondary/70 dark:shadow-article-dark-primary/70 hover:shadow-xl hover:shadow-article-light-secondary dark:hover:shadow-dark-primary transition-all duration-200 ease-out rounded-lg w-full max-w-sm mx-auto">
            <img src={ImageSrc} alt={ImageAlt} className="h-60 w-full object-cover rounded-t-lg " />
            <div className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-bold font-serif text-article-dark dark:text-article-light">{article.title}</h2>
                    <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-3 text-article-dark-primary dark:text-article-light-primary">{article.description}</p>
                    </section>
                    <footer className="text-xs text-right ml-auto flex space-x-2 pt-5 italic text-article-light-secondary">
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