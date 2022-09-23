import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const LogInUser = useSelector(state => state.user.isLogin);

  if (LogInUser) {
    return <Navigate to="/calculator" />;
  }
  return <Outlet />;
};

export default PublicRoute;
