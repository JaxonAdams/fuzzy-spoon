import { HouseDoorFill } from 'react-bootstrap-icons';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <Link href='/'>
                <h1 className={styles.homeLink}>
                    <HouseDoorFill className={styles.homeIcon} />
                </h1>
            </Link>
            <h1 className={styles.title}>Productivity Tool</h1>
        </header>
    );
};

export default Header;