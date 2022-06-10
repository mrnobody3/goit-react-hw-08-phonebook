import { Container } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { isUserLogin } from 'redux/auth/auth-selectors';
import { loginUser } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector(isUserLogin, shallowEqual);

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const onLoginUser = data => {
    dispatch(loginUser(data));
  };

  return (
    <Container className="w-50 p-3">
      <LoginForm onSubmit={onLoginUser} />
    </Container>
  );
};

export default LoginPage;
