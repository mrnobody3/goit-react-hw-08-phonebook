import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Form } from 'react-bootstrap';

const ContactForm = ({ addContactBySubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContactBySubmit(state);
    setState({ name: '', number: '' });
  };
  const { name, number } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContactBySubmit: PropTypes.func.isRequired,
};
