import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1 className={'font-bold'}>Header</h1>
    </div>
  );
}

export default Header;
