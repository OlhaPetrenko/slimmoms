import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.scss';

function RegistrationPage() {
  return (
    <div className={s.section}>
      <div className="container">
        <h3 className={s.formTitle}>Register</h3>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
