import Navigation from 'Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { RegisterView, ContactView, LoginView } from 'Views';
import { currentUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PublicRoute, PrivateRoute } from './Route/Route';
import authSelectors from 'redux/auth/authSelectors';

export default function App() {
  const getToken = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

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

        <Route
          path="*"
          element={getToken === null ? <LoginView /> : <ContactView />}
        />
      </Routes>
    </div>
  );
}
