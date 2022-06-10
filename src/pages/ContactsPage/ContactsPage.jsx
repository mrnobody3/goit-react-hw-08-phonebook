import { useState, useEffect, useCallback } from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Spinner } from 'react-bootstrap';

import {
  getContacts,
  getLoading,
  getError,
} from '../../redux/contacts/contacts-selectors';

import * as operations from '../../redux/contacts/contacts-operations';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { Container } from 'react-bootstrap';

const ContactsPage = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const handleChange = useCallback(
    e => {
      setFilter(e.target.value);
    },
    [setFilter]
  );

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const getFilteredContacts = useCallback(() => {
    if (!filter) {
      return contacts;
    }
    const filterToLover = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const result = name.toLowerCase().includes(filterToLover);
      return result;
    });
    return filteredContacts;
  }, [contacts, filter]);

  const addContactBySubmit = props => {
    dispatch(operations.addContact(props));
  };

  return (
    <Container className="w-50 p-3">
      <h1 className="">Phonebook</h1>
      <ContactForm addContactBySubmit={addContactBySubmit} />
      <h2 className="">Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      {error && <p>Whoops...Please try later</p>}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {Boolean(contacts.length) && (
        <ContactList
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      )}
    </Container>
  );
};

export default ContactsPage;
