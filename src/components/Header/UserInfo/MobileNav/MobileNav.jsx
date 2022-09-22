import { FiCornerDownLeft } from "react-icons/fi";
import s from "./MobileNav.module.scss"

const MobileNav = () => {
  return (
    <div className={ s.mobileNav }>
      <button className={ s.btnBack }><FiCornerDownLeft /></button>
      <div className={s.mobileNavInfo}>
        <div className={s.mobileNavName}>Nick</div>
        <button className={ s.btnLogout }>Exit</button>
      </div>
    </div>
  );
}

export default MobileNav;
