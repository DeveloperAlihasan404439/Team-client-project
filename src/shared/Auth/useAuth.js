import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
    const authData = useContext(AuthContext)
    return authData;
};

export default useAuth;