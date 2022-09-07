import PropTypes from 'prop-types';

import s from './Filter.module.css';
import { Form, FloatingLabel } from 'react-bootstrap';

export default function Filter({ filter, onChange }) {
  return (
    <Form className={s.form}>
      <FloatingLabel
        controlId="floatingInput"
        label="Filter by name"
        className="mb-2"
      >
        <Form.Control type="text" value={filter} onChange={onChange} />
      </FloatingLabel>
    </Form>
  );
}

Filter.propTypes = {
  filterEl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
