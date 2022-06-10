import { Container } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import RegisterForm from 'components/RegisterForm';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { signupUser } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useSelector(isUserLogin, shallowEqual);

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const registerUser = data => {
    console.log(data);
    dispatch(signupUser(data));
  };

  return (
    <Container className="w-50 p-3">
      <RegisterForm onSubmit={registerUser} />
    </Container>
  );
};

export default RegisterPage;
