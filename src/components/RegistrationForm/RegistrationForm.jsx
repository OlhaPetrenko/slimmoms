// import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './RegistrationForm.module.scss';

function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password, username: name };
    onSubmit(data);
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
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="name"
        maxLength="15"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я0-9])?[a-zA-Zа-яА-Я0-9]*)*$"
        required
        autoFocus
        autoComplete="off"
        value={name}
        placeholder="Name *"
        onChange={handleChange}
      />
      <input
        className={s.input}
        type="email"
        name="email"
        pattern="\S+@[a-z]+\.[a-z]+"
        title="The email must contain only Latin lowercase letters, @ and  a dot without spacesю  For example - butterfly@mail.com"
        required
        autoComplete="off"
        value={email}
        placeholder="Email *"
        onChange={handleChange}
      />

      <input
        className={s.input}
        type="password"
        name="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01"
        // minLength="8"
        // maxLength="15"
        required
        value={password}
        placeholder="Password *"
        onChange={handleChange}
      />

      <div className={s.btnGroup}>
        <button type="submit" className={s.btn}>
          Login
        </button>
        <button type="button" className={s.btnActive}>
          Register
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;

// RegistrationForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
