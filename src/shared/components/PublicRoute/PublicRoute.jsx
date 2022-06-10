import { Navigate, Outlet } from 'react-router-dom';

import useLogin from 'shared/hooks/useLogin';

const PublicRoute = () => {
  const isLogin = useLogin();

  if (isLogin) {
    return <Navigate replace to="/my-books" />;
  }

  return <Outlet />;
};

export default PublicRoute;
