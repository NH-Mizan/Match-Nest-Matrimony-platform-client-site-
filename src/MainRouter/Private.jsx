
import useAuth from '../CastomHooks/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loader/Loading';

const Private = ({children}) => {
 const {user,loading} = useAuth()
 const location = useLocation()
 if(loading){
   return <Loading/>
 }
 if(user && user?.email){
    return children
 }
 return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;