import Link from 'next/link'

type Props = {
    ErrorHeading: string,
    SubHeading: string,
    ErrorDescription: string,
    NotFoundError?: string
}

const ErrorLayout = ({ ErrorHeading, SubHeading, ErrorDescription, NotFoundError }: Props) => {
    return (
        <div className='flex flex-col xs-notFound sm:sm-notFound md:md-notFound justify-center font-semibold pl-8'>
            <div className="items-start space-y-3">
                <p className=" text-7xl text-accent">{ErrorHeading}</p>
                <p className="text-dark dark:text-light-primary text-2xl md:text-3xl lg:text-4xl">{SubHeading}</p>
                <div className="pt-8 text-sm md:text-base text-light-secondary">
                    <p>{ErrorDescription}</p>
                    <p className="leading-loose">Return to <Link href="/" className="underline underline-offset-2 decoration-accent selection:!decoration-light">Home</Link> Page {NotFoundError}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorLayout