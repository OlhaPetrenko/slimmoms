import { Logo, UserInfo, Navigation, UserInfoLogo, Burger, MobileNav } from '/';
import s from './Header.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUser } from 'redux/auth/auth-operation';

const Header = () => {
  const isLogin = false;
  // const dispatch = useDispatch();
  // const isLogin = useSelector(state => state.auth.isLogin);

  return (
<div>
      <header className={ s.header }>
        <div className="container">
          <nav className={ s.nav }>
            { !isLogin ?
              (<><UserInfoLogo /><UserInfo /><Burger /> </>)
              : (<><Logo /> <Navigation /> </>) }
          </nav>
        </div>
      </header>
       <MobileNav />
</div>
  );
};

export default Header;
