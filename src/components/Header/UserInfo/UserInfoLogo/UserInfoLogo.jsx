import { NavLink } from 'react-router-dom';
import s from "./UserInfoLogo.module.scss"

const UserInfoLogo = () => {
  return (
    <div className={ s.userInfoLogo } >
      <NavLink className={ s.userInfoImg } to="/diary" />
    </div>
  );
}

export default UserInfoLogo;
