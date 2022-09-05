import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li key={id} className={s.list_item}>
            <ContactItem userName={name} phone={phone} />
            <button
              onClick={() => onDeleteContact(id)}
              className={s.list_button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
