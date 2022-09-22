import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Registration = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const Main = lazy(() => import('pages/MainPage/MainPage'));
const Diary = lazy(() => import('pages/DiaryPage/DiaryPage'));
const Calculator = lazy(() => import('pages/CalculatorPage/CalculatorPage'));

const userRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </Suspense>
  );
};

export default userRoutes;
