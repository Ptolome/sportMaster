import LoginSection from '../login-section/LoginSection';
import NavMenu from '../NavMenu';
import styles from './Header.module.css';
import cn from 'classnames';

const Header = ({ className: className = '' }) => {
  return (
    <div className={cn(styles.header, className)}>
      <NavMenu />
      <LoginSection />
    </div>
  );
};

export default Header;
