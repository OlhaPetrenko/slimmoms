import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.scss';

function LoginPage() {
  return (
    <div className={s.section}>
      <div className="container">
        <h3 className={s.formTitle}>Sign in</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
