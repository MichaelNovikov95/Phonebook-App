import Navigation from 'Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { RegisterView, ContactView, LoginView } from 'Views';
import { useSelector } from 'react-redux';
import { PublicRoute, PrivateRoute } from './Route/Route';
import authSelectors from 'redux/auth/authSelectors';

export default function App() {
  const getToken = useSelector(authSelectors.getToken);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginView />} />

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
