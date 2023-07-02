import Link from 'next/link'

type Props = {
    ErrorHeading: string,
    SubHeading: string,
    ErrorDescription: string,
    NotFoundError?: string
    InternalServerError?: boolean
}

const ErrorLayout = ({ ErrorHeading, SubHeading, ErrorDescription, NotFoundError, InternalServerError }: Props) => {
    return (
        <div className='flex flex-col justify-center pl-8 font-semibold xs-notFound sm:sm-notFound md:md-notFound'>
            <div className="items-start space-y-3">
                <p className=" text-7xl text-accent">{ErrorHeading}</p>
                <p className="text-2xl text-dark dark:text-light-primary md:text-3xl lg:text-4xl">{SubHeading}</p>
                <div className="pt-8 text-sm md:text-base text-light-secondary">
                    <p>{ErrorDescription}</p>
                    <p className="leading-loose">Return to <Link href="/" className="underline underline-offset-2 decoration-accent selection:!decoration-light">Home</Link> Page {NotFoundError}</p>
                </div>
                {InternalServerError && <div className='pt-8 text-sm md:text-base text-light-secondary'>
                    <p>
                        If the problem persists, try contacting the <a className='text-accent/90 underline-offset-2 hover:underline' href="https://github.com/dhawal-793" target='_blank'>Owner</a>.
                    </p>
                </div>}
            </div>
        </div>
    )
}

export default ErrorLayout