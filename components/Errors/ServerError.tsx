import ErrorLayout from "../Layouts/ErrorLayout"


const ServerError = () => {
    return (
        <ErrorLayout
            ErrorHeading="Opps!"
            SubHeading="Something went wrong!"
            ErrorDescription="Try Again After Some time or"
        />
    )
}

export default ServerError