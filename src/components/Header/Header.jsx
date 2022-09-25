import { useSelector } from 'react-redux';
import {
  Logo,
  UserInfo,
  Navigation,
  // UserInfoLogo,
  MobileNav,
  Burger,
} from '/';
import s from './Header.module.scss';

import useResizeScreen from 'shared/hooks/useResizeScreen';

const Header = () => {
  const isLogIn = useSelector(state => state.user.isLogin);

  const mediaScreen = useResizeScreen();
  console.log(mediaScreen.isMobile);
  console.log(mediaScreen.isTablet);

  if (mediaScreen.isMobile || mediaScreen.isTablet) {
    return (
      <header className={s.header}>
        <div className="container">
          <div className={s.navContainer}>
            <Logo />
            <nav className={s.nav}>{!isLogIn && <Navigation />}</nav>
            {isLogIn && (
              <>
                <MobileNav /> <Burger />
              </>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.navContainer}>
          <Logo />
          <nav className={s.nav}>
            {!isLogIn ? <Navigation /> : <UserInfo />}
          </nav>
          {isLogIn && (
            <>
              <MobileNav /> <Burger />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
