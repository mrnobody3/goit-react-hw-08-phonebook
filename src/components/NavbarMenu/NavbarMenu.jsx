import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UserMenu from 'components/UserMenu';
import useLogin from 'shared/hooks/useLogin';

const NavbarMenu = () => {
  const isLogin = useLogin();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Phonebook</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {isLogin && (
              <LinkContainer to="/contacts">
                <Nav.Link>Contacts</Nav.Link>
              </LinkContainer>
            )}
            {!isLogin && (
              <>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          {isLogin && <UserMenu />}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
