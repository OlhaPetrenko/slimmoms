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



const Header = () => {
  const isLogIn = useSelector(state => state.user.isLogin);

  return (
    <header className={ s.header }>
      <div className="container">
        <div className={ s.navContainer }>
          <Logo />
          <nav className={ s.nav }>
            { !isLogIn ? (
              <Navigation />
            ) : (
              <>
                <UserInfo />
              </>
            ) }
          </nav>
          { isLogIn && <><MobileNav /> <Burger /></> }
        </div>
      </div>
    </header>
  );
};

export default Header;
