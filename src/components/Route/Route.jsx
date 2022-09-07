import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="contacts" />;
  }

  return <Outlet />;
};

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};
