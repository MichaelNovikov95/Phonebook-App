import Navigation from 'Navbar/Navbar';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { RegisterView, ContactView, LoginView } from 'Views';
import { currentUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PublicRoute, PrivateRoute } from './Route/Route';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/goit-react-hw-08-phonebook') {
      navigate('/contacts');
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactView />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </div>
  );
}
