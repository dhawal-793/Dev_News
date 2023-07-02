import ErrorLayout from "../Layouts/ErrorLayout"


const ServerError = () => {
    return (
        <ErrorLayout
            ErrorHeading="Oops!"
            SubHeading="Something went wrong"
            ErrorDescription="Internal Server Error occured, Please Try Again After Some time or"
            InternalServerError={true}
        />
    )
}

export default ServerError