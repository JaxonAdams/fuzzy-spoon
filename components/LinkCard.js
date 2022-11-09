import { CalendarWeek, JournalBookmarkFill } from 'react-bootstrap-icons';

import styles from '../styles/LinkCard.module.css';

const LinkCard = ({ location }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.linkTitle}>{location === 'notes' ? 'Notes' : 'Calendar'}</h2>
            { location === 'notes' 
                ? <JournalBookmarkFill className={styles.linkIcon} /> 
                : <CalendarWeek className={styles.linkIcon} /> 
            }
        </div>
    );
};

export default LinkCard;