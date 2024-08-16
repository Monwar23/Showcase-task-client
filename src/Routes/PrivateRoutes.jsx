import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    console.log(location);

    if (loading) {
        return (
            < div className="flex justify-center items-center h-screen" >
                <span className="loading loading-spinner loading-lg"></span>
            </div >

        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location?.pathname || '/'} to="/"></Navigate>
};

export default PrivateRoutes;