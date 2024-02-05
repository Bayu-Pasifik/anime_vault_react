import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl text-white font-bold mb-2">Oops!!</h1>
            <p className="text-2xl text-white mb-2">An error has occured</p>
            <p className="text-2xl text-white mb-2">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;