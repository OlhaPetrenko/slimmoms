import { Logo, UserInfo, Navigation, Burger } from '/';
import s from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operation';

const Header = () => {
  // const isLogin = false;
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Logo />
          {isLogin ? (
            <>
              <UserInfo />
              <Burger />
            </>
          ) : (
            <Navigation />
          )}
          <button type="button" onClick={() => dispatch(logoutUser())}>
            LogOut
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
