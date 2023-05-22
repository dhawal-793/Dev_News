
import ErrorLayout from "../Layouts/ErrorLayout";

const NotFoundError = () => {

    return (
        <ErrorLayout
            ErrorHeading="404"
            SubHeading="Oops! You weren&apos;t supposed to see this"
            ErrorDescription="The Page you&apos;re looking for is no longer here or never existed in first place."
            NotFoundError="and remember: you haven;t seen anything."
        />
    )
}

export default NotFoundError