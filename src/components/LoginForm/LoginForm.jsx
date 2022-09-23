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
        pattern="\S+@[a-z]+.[a-z]+"
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
        minLength="8"
        maxLength="15"
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
