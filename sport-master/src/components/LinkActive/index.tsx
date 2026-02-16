'use client';

import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import styles from './LinkActive.module.css';

interface ILinkActive {
  children: React.ReactNode;
  href: string;
  activeClassName?: string;
  className?: string;
}

const LinkActive: FC<ILinkActive> = ({
  children,
  href,
  activeClassName = styles.active,
  className = '',
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(styles.link, className, { [activeClassName]: isActive })}
    >
      {children}
    </Link>
  );
};

export default LinkActive;
