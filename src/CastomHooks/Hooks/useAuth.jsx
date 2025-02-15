import { useContext } from "react";
import { Context } from "../../Provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(Context)
    return auth ;
} 

export default useAuth;