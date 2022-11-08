import { HouseDoorFill } from 'react-bootstrap-icons';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <div>
                <Link href='/'>
                    <h1 className={styles.homeLink}>
                        <HouseDoorFill className={styles.homeIcon} />
                    </h1>
                </Link>
                <h1 className={styles.title}>Welcome Jaxon!</h1>
            </div>
            <nav className={styles.aboutLinkContainer}>
                <Link href='/about'>About</Link>
            </nav>
        </header>
    );
};

export default Header;