
const ArticleLoader = () => {
    return (
        <div className="space-y-5 animate-pulse border-2 rounded-lg p-2 border-blue-300 dark:border-gray-200 w-full max-w-md mx-auto">
            <div className="w-full h-52 bg-blue-200 opacity-50 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-full h-11 bg-indigo-300 opacity-40 dark:bg-gray-500 rounded-lg"></div>
            <div className="space-y-2">
                <div className="h-6 rounded-md bg-indigo-300 dark:bg-gray-500 opacity-25"></div>
                <div className="h-6 rounded-md bg-indigo-300 dark:bg-gray-500 opacity-25"></div>
            </div>
            <div className="flex space-x-4 justify-between">
                <div className="w-1/2 h-6 bg-indigo-300 opacity-30 dark:bg-gray-500 rounded-lg"></div>
                <div className="w-1/2 h-6 bg-indigo-300 opacity-30 dark:bg-gray-500 rounded-lg"></div>
            </div>
            <div className="h-10 w-full rounded-lg bg-blue-300 dark:bg-gray-500 opacity-30"></div>
        </div>
    )
}

export default ArticleLoader