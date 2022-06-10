import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { name, password, email } = form;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          value={name}
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handelChange}
        />
      </Form.Group>

      <Button type="submit">SignUp</Button>
    </Form>
  );
};

export default RegisterForm;
