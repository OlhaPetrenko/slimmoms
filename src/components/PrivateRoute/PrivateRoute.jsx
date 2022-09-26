import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // const LogIn = useSelector(state => state.auth.isLogin);
  const LogInUser = useSelector(state => state.user.isLogin);
  if (LogInUser) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
