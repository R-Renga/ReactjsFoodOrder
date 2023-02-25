import { useRouteError } from "react-router-dom";


const Error = () => {
    const errors = useRouteError();
    const {status,statusText} = errors
    return (
        <>
        <h1>Not found</h1>
            <h2>Something went wrong</h2>
            <h2>{status}</h2>
            <h2>{statusText}</h2>
            </>
    )
}

export default Error;