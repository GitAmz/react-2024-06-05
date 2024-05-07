import classNames from 'classnames'
import styles from'./styles.module.css'
export const Header = ({children}) => {
    return <div>
    <header className={classNames(styles.root)}>{children}</header>
    </div>
}
 