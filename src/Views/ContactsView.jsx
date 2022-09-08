import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from '../redux/contacts/contactsOperations';
import { changeFilter } from '../redux/contacts/contactsSlice';

import { FormLogic, Filter, ContactList, Loader } from '../components/index';

import { Container, Row, Col } from 'react-bootstrap';
import authSelectors from 'redux/auth/authSelectors';

export default function MyContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const getToken = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getToken !== null) {
      dispatch(contactsOperations.fetchContacts());
    } else {
      return;
    }
  }, [dispatch, getToken]);

  const onFormProps = data => {
    const newItem = {
      ...data,
    };

    const contactExist = contacts.some(
      ({ name, number }) => name === newItem.name || number === newItem.number
    );
    if (contactExist) {
      alert(`${newItem.name} is already exist in your contact list`);
    } else {
      dispatch(contactsOperations.addContacts(newItem));
    }
  };

  const onHandleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  const onHandleVisibleContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  const onHandleDelete = contactId => {
    dispatch(contactsOperations.deleteContacts(contactId));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Phonebook</h2>
          <FormLogic onSubmit={onFormProps} />
        </Col>
        <Col>
          <h2>Contacts</h2>
          {isLoading && <Loader />}
          <Filter filterEl={filter} onChange={onHandleFilter} />
          <ContactList
            contacts={onHandleVisibleContacts()}
            onDeleteContact={onHandleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
}
