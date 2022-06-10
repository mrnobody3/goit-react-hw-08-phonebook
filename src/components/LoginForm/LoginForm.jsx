import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
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

  const { password, email } = form;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={handelChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
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
    </>
  );
};

export default LoginForm;
