import { useDispatch, useSelect } from 'react-redux';
import { Logo, UserInfo, Navigation, UserInfoLogo, MobileNav } from '/';
import s from './Header.module.scss';

import { logoutUser } from 'redux/auth/auth-operation';

const Header = () => {
  // const isLogin = false;
  const dispatch = useDispatch();

  return (
    <div>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Logo /> <Navigation />
            <UserInfo />
            <button type="button" onClick={() => dispatch(logoutUser())}>
              LogOut
            </button>
          </nav>
        </div>
      </header>

      {/* <MobileNav /> */}
    </div>
  );
};

export default Header;
