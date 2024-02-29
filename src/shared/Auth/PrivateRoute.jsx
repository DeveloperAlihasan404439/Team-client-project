import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import Loader from "../Loader";
const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(user){
        return children
    }
    if(loading){
        return <Loader/>

    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default PrivateRoute;

