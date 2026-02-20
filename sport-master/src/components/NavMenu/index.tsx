import st from './NavMenu.module.css';
import LinkActive from '../LinkActive';

const NavMenu = () => {
  return (
    <div className={st.nav}>
      <LinkActive href="/rackets">Ракетки</LinkActive>
      <LinkActive href="/rackets/top10">Топ 10 </LinkActive>
      <LinkActive href="/">Главная</LinkActive>
    </div>
  );
};

export default NavMenu;
