import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

import { Button } from 'react-bootstrap';
import s from './Menu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <p className={s.text}>Signed in as: {name}</p>
      <Button variant="dark" type="button" onClick={() => dispatch(logout())}>
        Log out
      </Button>
    </div>
  );
}
