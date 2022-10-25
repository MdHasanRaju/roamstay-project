import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toggleModal } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.init";

const PrivateRoute = ({ children }) => {
  const {user} = useSelector(state => state.auth)
  const location = useLocation(auth);
  const dispatch = useDispatch();

  if (!user) {
    dispatch(toggleModal(true));
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
