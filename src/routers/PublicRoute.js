import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {

    const {isLoggedIn} = children.props;

    return !isLoggedIn ? children : <Navigate to="/"/>
}
