import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const getToken = useSelector(authSelectors.getToken);

  if (getToken !== null) {
    return <Navigate to="contacts" />;
  }

  return <Outlet />;
};

export const PrivateRoute = () => {
  const getToken = useSelector(authSelectors.getToken);

  if (getToken === null) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};
