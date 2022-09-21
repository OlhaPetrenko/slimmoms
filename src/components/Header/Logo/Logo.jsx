// import { Link } from "react-router-dom";
import s from "./Logo.module.scss"
import { NavLink } from 'react-router-dom';

const Logo = () => {

  return (
    <div className={ s.headerLogo } >
      <NavLink className={ s.headerLogoImg } to="/diary" />
    </div>
  );
}

export default Logo;
