import Line from "./Line"
import Box from "./Box"
import Paragraph from "./Paragraph"

const ArticlePageLoader = () => {
    return (
        <div className="py-5">
            <div className="flex space-y-3 flex-col pb-24 w-full mx-auto md:max-w-3xl lg:max-w-5xl animate-pulse">
                <div className="space-y-2 pb-5">
                    <Line height="h-12" opacity="opacity-80" rounded="rounded-lg" />
                    <Line height="h-12" width="w-2/5" opacity="opacity-80" rounded="rounded-lg" />
                </div>
                <Box />
                <div className="flex flex-wrap justify-between sm:space-x-4 py-3 md:max-w-2xl">
                    <Line opacity="opacity-50" height="h-3 sm:h-4" width="w-1/3 mb-2 sm:w-44 sm:pb-0" rounded="rounded-md" />
                    <Line opacity="opacity-50" height="h-3 sm:h-4" width="w-1/3 mb-2 sm:w-44 sm:pb-0" rounded="rounded-md" />
                    <div className="w-1/2 h-3 sm:hidden" />
                    <Line width="w-1/3 sm:w-44" height="h-3 sm:h-4" opacity="opacity-50" rounded="rounded-md" />
                </div>
                <div className="py-5 space-y-5 px-2">
                    <div className="space-y-2">
                        <Paragraph />
                        <Paragraph />
                        <Paragraph width="w-3/4" />
                    </div>
                    <div className="space-y-2">
                        <Paragraph />
                        <Paragraph width="w-1/2" />
                    </div>
                    <div className="space-y-2">
                        <Paragraph />
                        <Paragraph />
                        <Paragraph />
                        <Paragraph width="w-3/4" />
                    </div>
                    <div className="space-y-2">
                        <Paragraph />
                        <Paragraph />
                        <Paragraph width="w-1/4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePageLoader