import styles from './Container.module.css';
import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <section className={styles.container}>{children}</section>;
}
