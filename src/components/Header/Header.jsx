import { useDispatch, useSelect } from 'react-redux';
import { Logo, UserInfo, Navigation, UserInfoLogo, MobileNav } from '/';
import s from './Header.module.scss';

const Header = () => {
  const isLogin = true;
  const dispatch = useDispatch()


  return (
    <div>
      <header className={ s.header }>
        <div className="container">
          <nav className={ s.nav }>
            { isLogin ? (
              <>
                <UserInfoLogo />
                <UserInfo />
              </>
            ) : (
              <>
                <Logo /> <Navigation />
              </>
            ) }
          </nav>
        </div>
      </header>
      { isLogin && <MobileNav /> }
    </div>
  );
};

export default Header;
