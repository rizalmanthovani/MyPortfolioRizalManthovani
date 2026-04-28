import styles from './Button.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'outline';

interface Props {
  children: ReactNode;
  href?: string; // if provided, renders <Link>
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: Props) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNames} prefetch={false}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
