import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import './Header.css'

export default function HeaderHome() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState();

  const { authenticated, logout } = useContext(AuthContext);

  const scrollControl = () => {
      const onScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          setHeaderClass('hide-header');
        } else {
          setHeaderClass();
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
  };

  useEffect(() => {
    scrollControl();
  }, [lastScrollTop]);

  // useEffect(() => {
  //   changeNavClass();
  // });

  const renderNavMenu = () => {
    const items = (
      <nav className={`nav-desktop`}>
        {authenticated ? <a className={`nav-menu-desktop`} href="/videos">Home</a> : <a className={`nav-menu-desktop`} href="/">Home</a>}
        {authenticated ? null : <a className={`nav-menu-desktop`} href="/sign">Assine já</a>}
        {authenticated ? <a className={`nav-menu-desktop`} href="/" onClick={logout}>Sair</a> : null}
        {authenticated ? null : <a className={`nav-menu-desktop`} href="/login">Login</a>}
      </nav>
    );
    return (
      <header
        id="header"
        className={`header-desktop ${headerClass}`}
      >
        {items}
      </header>
    );
  };

  return (
    <div
      className="header-div"
      id="header"
    >
      {renderNavMenu()}
    </div>
  );
}