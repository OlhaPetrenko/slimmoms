import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => {
  const activeNav = ({ isActive }) => {
    return isActive ? `${s.headerNavLink} ${s.active}` : s.headerNavLink;
  };

  return (
    <div className={s.headerNavContainer}>
      <NavLink className={activeNav} to="/login">
        Sign in
      </NavLink>
      <NavLink className={activeNav} to="/registration">
        Registration
      </NavLink>
    </div>
  );
};

export default Navigation;
