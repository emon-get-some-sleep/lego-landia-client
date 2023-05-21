import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ClockLoader } from "react-spinners";


const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    if(isLoading){
        return (
            <div className="h-[100vh] flex items-center flex-col justify-center">
                <h1 className="text-[#181D4E] text-3xl my-4">Loading Please Wait</h1>
                <ClockLoader size='150' color="#36d7b7" />
            </div>
        )
    }
    if(user?.email){
        return children;
    }

    
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;