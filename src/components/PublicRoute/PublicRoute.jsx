import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const LogIn = useSelector(state => state.auth.isLogin);

  if (LogIn) {
    return <Navigate to="/diary" />;
  }
  return <Outlet />;
};

export default PublicRoute;
