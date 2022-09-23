import { useDispatch, useSelector } from 'react-redux';

import { logInUser } from 'redux/auth/auth-operation';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { userInfoOperation } from 'redux/user/user-operations';
import s from './LoginPage.module.scss';

function LoginPage() {
  const dispatch = useDispatch();
  // const accToken = useSelector(state => state.auth.accessToken);

  const onSubmit = data => {
    dispatch(logInUser(data));
    // dispatch(userInfoOperation(accToken));
  };
  return (
    <div className={s.section}>
      <div className="container">
        <h3 className={s.formTitle}>Sign in</h3>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default LoginPage;
