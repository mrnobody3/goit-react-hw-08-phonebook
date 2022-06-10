import { Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import { logoutUser } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser, shallowEqual);
  const { name, email } = user;
  const logoutByClick = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <Badge bg="secondary" className="me-3 fs-5">
        {name || email}
      </Badge>
      <Button variant="primary" onClick={logoutByClick}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
