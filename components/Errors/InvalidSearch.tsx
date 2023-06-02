import ErrorLayout from '../Layouts/ErrorLayout'

const InvalidSearch = () => {
    return (
        <ErrorLayout
            ErrorHeading="Opps!"
            SubHeading="Search term is missing or invalid."
            ErrorDescription="Try Searching Something else or"
        />

    )
}

export default InvalidSearch