import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ userName, number }) {
  return (
    <>
      <span>{userName}: </span>
      <span className={s.number}>{number} </span>
    </>
  );
}

ContactItem.propTypes = {
  userName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
