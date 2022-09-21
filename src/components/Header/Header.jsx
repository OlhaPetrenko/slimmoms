import { Logo, UserInfo, Navigation, Burger } from '/';
import s from './Header.module.scss';

const Header = () => {
  const isLogin = false;

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
