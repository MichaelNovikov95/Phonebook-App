import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import s from './Menu.module.css';

export default function AuthMenu() {
  return (
    <div className={s.container}>
      <p className={s.text}>
        <Link className={s.link} to="/register">
          <Button variant="primary" size="md" active>
            Register
          </Button>
        </Link>
      </p>
      <p>
        <Link className={s.link} to="/login">
          <Button variant="primary" size="md" active>
            Login
          </Button>
        </Link>
      </p>
    </div>
  );
}
