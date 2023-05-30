import Line from "./Line"

const ArticleLoader = () => {
    return (
        <div className=" animate-pulse border-2 rounded-lg  border-loading-light/80 dark:border-loading-dark w-full max-w-sm mx-auto">
            <div className="w-full h-60 bg-loading-light/80 opacity-60 dark:bg-loading-dark rounded-t-lg"></div>
            <div className="p-5 space-y-5">
                <div className="space-y-2">
                    <Line opacity="opacity-70" />
                    <Line width="w-3/4" opacity="opacity-70" />
                </div>
                <div className="space-y-2">
                    <Line height="h-2.5" opacity="opacity-50" />
                    <Line height="h-2.5" opacity="opacity-50" />
                    <Line height="h-2.5" width="w-3/4" opacity="opacity-25" />
                </div>
                <div className="flex space-x-4 justify-between">
                    <div className="w-1/4 h-2" />
                    <div className="flex space-x-3 w-full">
                        <Line width="w-1/2" height="h-2" />
                        <Line width="w-1/2" height="h-2" />
                    </div>
                </div>
            </div>
            <Line height="h-9" rounded="rounded-none rounded-b-lg" opacity="opacity-50 " />
        </div>
    )
}

export default ArticleLoader


