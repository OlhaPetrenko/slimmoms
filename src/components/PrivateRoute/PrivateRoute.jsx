import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const LogIn = useSelector(state => state.auth.isLogin);

  // if (LogIn) {
  return <Outlet />;
  // }
  // return <Navigate to="/login" />;
};

export default PrivateRoute;
