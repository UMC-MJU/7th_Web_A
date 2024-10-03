import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
function Header() {
    return (
        <div className={styles.header}>
            <div></div>
            <h1>TODO LIST</h1>
            <Link to={`/movie/`}>
                <button className={styles.button}>Movie</button>
            </Link>
        </div>
    );
}

export default Header;
