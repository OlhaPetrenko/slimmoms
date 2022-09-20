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
    <div className="container">
      <form className={s.Form} onSubmit={handleSubmit}>
        {/* <label >
          Email *
          <input
            type="email"
            name="email"
            required
            autofocus
            autoComplete="off"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>

        <label>
          Password *
          <input
            type="password"
            name="password"
            required
            value={password}
            placeholder="Password *"
            onChange={handleChange}
          />
        </label> */}

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
          <button type="submit" className={s.BtnActive}>
            Вхід
          </button>
          <button type="button" className={s.Btn}>
            Реєстрація
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
