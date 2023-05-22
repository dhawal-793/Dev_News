import ErrorLayout from '../Layouts/ErrorLayout'

const SearchNotFound = () => {
    return (
        <ErrorLayout
            ErrorHeading="Opps!"
            SubHeading="No News available to match searched keyword."
            ErrorDescription="Try Searching Something else or"
        />

    )
}

export default SearchNotFound