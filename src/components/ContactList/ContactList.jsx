import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';

import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ListGroup variant="flush" className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListGroup.Item key={id} className={s.list_item}>
            <ContactItem userName={name} number={number} />
            <button
              onClick={() => onDeleteContact(id)}
              className={s.list_button}
            >
              Delete
            </button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
