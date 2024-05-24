import React, { useEffect, useState, useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { AuthContext } from '../../Context/Auth';
import headerimg from '../../Images/HeaderImg.png';
import MenuPopover from '../../Popover/MenuPopover';
import '../../Styles/Header.css';

export default function HeaderHome() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState();
  const [isMobileClass, setIsMobileClass] = useState('desktop');

  const { authenticated, logout } = useContext(AuthContext);

  const changeNavClass = () => {
    if (isMobile) {
      return setIsMobileClass('mobile');
    }
    return setIsMobileClass('desktop');
  };

  const scrollControl = () => {
    if (isMobile === false) {
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
    }
    return null;
  };

  useEffect(() => {
    scrollControl();
  }, [lastScrollTop]);

  useEffect(() => {
    changeNavClass();
  });

  const renderNavMenu = () => {
    const items = (
      <nav className={`nav-${isMobileClass}`}>
        <a className={`nav-menu-${isMobileClass}`} href="#header-top">Home</a>
        <a className={`nav-menu-${isMobileClass}`} href="#to-whom">Para quem</a>
        <a className={`nav-menu-${isMobileClass}`} href="#course-presentation">O Curso</a>
        <a className={`nav-menu-${isMobileClass}`} href="#personal">Quem sou eu</a>
        {authenticated ? <a className={`nav-menu-${isMobileClass}`} href="/user">Meu perfil</a> : null}
        {authenticated ? <a className={`nav-menu-${isMobileClass}`} href="/" onClick={logout}>Sair</a> : null}
        {authenticated ? null : <a className={`nav-menu-${isMobileClass}`} href="/subscribeorlogin">Inscreva-se</a>}
      </nav>
    );
    if (isMobile) {
      return (
        <header
          id="header"
          className={`header-mobile ${headerClass}`}
        >
          <MenuPopover items={items} />
        </header>
      );
    }
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
      id="header-top"
    >
      <img
        src={headerimg}
        alt="Mentoria liderança cristã Feminina"
        className="header-img"
      />
      {renderNavMenu()}
    </div>
  );
}