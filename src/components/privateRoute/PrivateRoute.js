import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/GlobalContext";

const PrivateRoute = ({ children }) => {
    const { user } = UserAuth();
    return user.name ? children : <Navigate to="/login" /> ;
};

export default PrivateRoute;
