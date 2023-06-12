import ReadMoreButton from "./ReadMoreButton"
type Props = {
    article: Article
}

const Article = ({ article }: Props) => {
    const ImageAlt = article.title ? article.title : "News"

    return (
        <article className="flex flex-col w-full max-w-sm mx-auto transition-all duration-200 ease-out rounded-lg shadow-md bg-article-light dark:bg-article-dark shadow-article-light-secondary/70 dark:shadow-article-dark-primary/70 hover:shadow-xl hover:shadow-article-light-secondary dark:hover:shadow-dark-primary">
             {
                article.image ?
                    <img src={article.image} alt={ImageAlt} className="object-cover w-full rounded-t-lg h-60 "/> :
                    <>
                        <img src="/Image_Not_found_Dark.jpg" alt="Image Not Found" className="hidden object-cover w-full rounded-t-lg h-60 dark:block" />
                        <img src="/Image_Not_found_Light.jpg" alt="Image Not Found" className="block object-cover w-full rounded-t-lg h-60 dark:hidden" />
                    </>

            }
            <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-serif font-bold text-article-dark dark:text-article-light">{article.title}</h2>
                    <section className="flex-1 mt-2">
                        <p className="text-xs line-clamp-3 text-article-dark-primary dark:text-article-light-primary">{article.description}</p>
                    </section>
                    <footer className="flex flex-col pt-5 ml-auto space-y-2 text-xs italic text-right xs:flex-row xs:space-y-0 xs:space-x-2 text-article-light-secondary">
                        <p>{article.source} <span className="hidden xs:inline ">-</span></p>
                        <p>{article.published_at}</p>
                    </footer>
                </div>
                <ReadMoreButton article={article} />
            </div>
        </article>
    )
}

export default Article;