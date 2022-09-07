import { Link } from 'react-router-dom';
import UserMenu from '../components/NavigationBar/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import AuthMenu from 'components/NavigationBar/AuthMenu';

import { Container, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/contacts">
          <Button variant="light" disabled>
            My Contacts
          </Button>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text href="#">
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
