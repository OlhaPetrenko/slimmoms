import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operation';
import { clearUser } from 'redux/user/user.slice';
import s from './MobileNav.module.scss';

const MobileNav = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userInfo.username);

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(clearUser());
  };

  return (
    <div className={s.mobileNav}>
      <div className={s.mobileNavInfo}>
        <div className={s.mobileNavName}>{userName}</div>
        <button className={s.btnLogout} onClick={() => logOut()}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
