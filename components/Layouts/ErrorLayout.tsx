import Link from 'next/link'

type Props = {
    ErrorHeading: string,
    SubHeading: string,
    ErrorDescription: string,
    NotFoundError?: string
}

const ErrorLayout = ({ ErrorHeading, SubHeading, ErrorDescription, NotFoundError }: Props) => {
    return (
        <div className='flex flex-col xs-notFound sm:sm-notFound md:md-notFound justify-center font-semibold text-zinc-800 dark:text-gray-200 pl-8'>
            <div className="items-start space-y-3">
                <p className=" text-7xl text-orange-400">{ErrorHeading}</p>
                <p className="text-gray-500 dark:text-gray-400 text-2xl md:text-3xl lg:text-4xl">{SubHeading}</p>
                <div className="pt-8 text-sm md:text-base text-gray-400">
                    <p>{ErrorDescription}</p>
                    <p className="leading-loose">Return to <Link href="/" className=" border-b-2 border-orange-400 pb-1">Home</Link> Page {NotFoundError}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorLayout