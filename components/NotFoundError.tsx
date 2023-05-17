import Link from "next/link";

const NotFoundError = () => {

    return (
        <div className='flex flex-col xs-notFound sm:sm-notFound md:md-notFound justify-center  items-center font-semibold text-zinc-800 dark:text-gray-200'>
            <div className="items-start space-y-3">
                <p className=" text-7xl text-orange-400">
                    404
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-2xl md:text-3xl lg:text-4xl"> Oops! You weren&apos;t supposed to see this</p>
                <div className="pt-8 text-xs md:text-sm text-gray-400">
                    <p className="">
                        The Page you&apos;re looking for is no longer here or never existed in first place.
                    </p>
                    <p className="leading-loose">
                        Return to <Link href="/" className=" border-b-2 border-orange-400 pb-1
                        ">Home Page</Link> and remember: you haven;t seen anything.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundError