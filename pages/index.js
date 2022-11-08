import Head from 'next/head';
import { useState, useEffect } from 'react';

import { formatDate } from '../utils/formatDate';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentDateObj, setCurrentDateObj] = useState({});

  useEffect(() => console.log(getCurrentDate()), []);

  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = formatDate(date);

    return { date: formattedDate };
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Productivity Tool</title>
      </Head>
    
      <div className={styles.dateContainer}>
        <h2 className={styles.date}>November 07, 2022</h2>
        <h1 className={styles.time}>8:00 PM</h1>
      </div>
    </div>
  )
}
