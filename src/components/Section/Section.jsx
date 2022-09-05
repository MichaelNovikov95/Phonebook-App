import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ children }) {
  return <div className={s.container}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
