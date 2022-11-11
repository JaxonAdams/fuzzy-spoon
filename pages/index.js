import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import LinkCard from '../components/LinkCard';
import Footer from '../components/Footer';

import { formatDate, formatTime } from '../utils/formatDate';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentDateObj, setCurrentDateObj] = useState({});

  useEffect(() => {
    setInterval(getCurrentDate, 1000);
  }, []);

  const getCurrentDate = () => {
    const date = new Date();

    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);

    setCurrentDateObj({ ...currentDateObj, date: formattedDate, time: formattedTime });
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Productivity Tool</title>
      </Head>
    
      <div className={styles.dateContainer}>
        <h2 className={styles.intro}>Today is...</h2>
        <h2 className={styles.date}>{currentDateObj && currentDateObj.date}</h2>
        <h1 className={styles.time}>{currentDateObj && currentDateObj.time}</h1>
      </div>

      <div className={styles.flexRow}>
        <Link href='/notes' className={styles.link}>
          <LinkCard location='notes' />
        </Link>
        <Link href='#' className={styles.link}>
          <LinkCard location='calendar' />
        </Link>
      </div>

      <Footer />
    </div>
  )
}
