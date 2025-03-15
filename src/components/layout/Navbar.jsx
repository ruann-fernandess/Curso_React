import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">home</Link></li>
                <li className={styles.item}><Link to="/empresa">empresa</Link></li>
                <li className={styles.item}><Link to="/contato">contato</Link></li>
            </ul>
        </>
    )
}

export default Navbar