import GridLayout from "@/components/GridLayout";
import ArticleLoader from "@/components/loaders/ArticleLoader";

export default function Loading() {
    return (
        <GridLayout>
            {
                [...Array(10)].map((e) => {
                    return <ArticleLoader key={e} />
                })
            }
        </GridLayout>
    )
}