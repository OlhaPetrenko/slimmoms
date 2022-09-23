// import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './LoginForm.module.scss';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password };

    onSubmit(data);
    setEmail('');
    setPassword('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
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
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="email"
        name="email"
        // pattern="\S+@[a-z]+.[a-z]+"
        pattern="[A-Za-z0-9]{6,}"
        title="Login cannot be less than 6 Latin characters or numbers. For example - butterfly01"
        required
        autoFocus
        // autoComplete="off"
        value={email}
        placeholder="Email *"
        onChange={handleChange}
      />

      <input
        className={s.input}
        type="password"
        name="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter.. For example - Butterfly01"
        // minLength="8"
        // maxLength="15"
        required
        value={password}
        placeholder="Password *"
        onChange={handleChange}
      />

      <div className={s.btnGroup}>
        <button type="submit" className={s.btnActive}>
          Login
        </button>
        <button type="button" className={s.btn}>
          Register
        </button>
      </div>
    </form>
    // </div>
  );
}

export default LoginForm;

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
