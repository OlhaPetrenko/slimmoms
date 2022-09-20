// import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './RegistrationForm.module.scss';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operation';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const disparch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password, username: name };

    disparch(registerUser(data));
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }

  return (
    // <div className="container">
    <form className={s.Form} onSubmit={handleSubmit}>
      <input
        className={s.Input}
        type="text"
        name="name"
        required
        autofocus
        autoComplete="off"
        value={name}
        placeholder="Name *"
        onChange={handleChange}
      />
      <input
        className={s.Input}
        type="email"
        name="email"
        required
        autofocus
        autoComplete="off"
        value={email}
        placeholder="Email *"
        onChange={handleChange}
      />

      <input
        className={s.Input}
        type="password"
        name="password"
        required
        value={password}
        placeholder="Password *"
        onChange={handleChange}
      />

      <div className={s.BtnGroup}>
        <button type="submit" className={s.Btn}>
          Вхід
        </button>
        <button type="button" className={s.BtnActive}>
          Реєстрація
        </button>
      </div>
    </form>
    // </div>
  );
}

export default RegistrationForm;

// RegistrationForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
