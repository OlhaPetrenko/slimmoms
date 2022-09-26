import css from './SideBar.module.scss';

const SideBar = ({ children }) => {
  return <div className={css.menuContainer}>{children}</div>;
};

export default SideBar;
