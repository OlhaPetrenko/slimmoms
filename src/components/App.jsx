// додаємо імпорти нижче, щоб менше було конфліктів

// import from
// import from
// import  from
// import from
// import from
// import  from
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header/Header';
import UserRoutes from './UserRouts/UserRoutes';
import { refreshUser } from 'redux/auth/auth-operation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};
