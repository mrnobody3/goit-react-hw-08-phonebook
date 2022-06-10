import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import NavbarMenu from './NavbarMenu';
import { currentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'shared/components/PrivateRoute';
import PublicRoute from 'shared/components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <>
      <NavbarMenu />
      <Suspense
        fallback={
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />}></Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
