import { useDispatch, useSelector } from 'react-redux';
import {
  Logo,
  UserInfo,
  Navigation,
  // UserInfoLogo,
  // MobileNav
} from '/';
import s from './Header.module.scss';

import { logoutUser } from 'redux/auth/auth-operation';
import { clearUser } from 'redux/user/user.slice';

const Header = () => {
  const isLogIn = useSelector(state => state.user.isLogin);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logoutUser());
    dispatch(clearUser());
  };

  return (
    <div>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Logo />
            {!isLogIn ? (
              <Navigation />
            ) : (
              <>
                <UserInfo />
                <button type="button" onClick={() => onClick()}>
                  LogOut
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* <MobileNav /> */}
    </div>
  );
};

export default Header;
