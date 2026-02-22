import NavMenu from '../NavMenu';
import styles from './Header.module.css';
import cn from 'classnames';

const Header = ({ className: className = '' }) => {
  return (
    <div className={cn(styles.header, className)}>
      <NavMenu />
    </div>
  );
};

export default Header;
