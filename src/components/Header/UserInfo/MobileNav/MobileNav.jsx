import { FiCornerDownLeft } from 'react-icons/fi';
import s from './MobileNav.module.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operation';

const MobileNav = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.mobileNav}>
      <button className={s.btnBack}>
        <FiCornerDownLeft />
      </button>
      <div className={s.mobileNavInfo}>
        <div className={s.mobileNavName}>Nick</div>
        <button onClick={() => dispatch(logoutUser)} className={s.btnLogout}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
