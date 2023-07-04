import GridLayout from "@/components/Layouts/GridLayout";
import ArticleLoader from "@/components/loaders/ArticleLoader";

export default function Loading() {
    return (
        <GridLayout>
            {
                [...Array(12)].map((_, i) => {
                    return <ArticleLoader key={i} />
                })
            }
        </GridLayout>
    )
}