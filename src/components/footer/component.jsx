import classNames from 'classnames';
import styles from './styles.module.css'

export const Footer = ({children}) => {
return <footer className={classNames(styles.root)} >{children}</footer>;
};