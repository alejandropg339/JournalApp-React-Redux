// import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../auth/authContext";




export const PrivateRoute = ({ children }) => {

    
    const {isLoggedIn} = children.props;
    console.log(isLoggedIn);


    return isLoggedIn ? children : <Navigate to="/auth/login"/>
}
