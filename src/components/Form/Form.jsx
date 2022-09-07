import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

import { Form, FloatingLabel, Button } from 'react-bootstrap';

export default function FormLogic({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: name,
      number: number,
    };

    onSubmit(newItem);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form className={s.form} onSubmit={onHandleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="FirstName"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Telephone">
        <Form.Control
          type="tel"
          placeholder="Telephone"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FloatingLabel>
      <Button className={s.btn} type="submit" variant="success">
        Add contact
      </Button>
    </Form>
  );
}

FormLogic.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
