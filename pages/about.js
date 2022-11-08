import Head from 'next/head';

import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Productivity Tool | About</title>
            </Head>

            <h1 className={styles.title}>About This Site</h1>
            <p className={styles.paragraph}>This is a simple productivity tool I have built using the Next.js framework. This app is currently a work in progress. My intention is to include both a notes section and a calendar section. I will be using this project to mess around with a few different things; mainly Next.js, but also little features as I think of them.</p>
            <p className={styles.paragraph}>Feel free to poke around! You can follow the development of this app at its <a href='https://github.com/JaxonAdams/fuzzy-spoon' target='_Blank' className={styles.link}>GitHub repo</a>. If you have any questions, you can find my contact info on my <a href='https://github.com/JaxonAdams' target='_Blank' className={styles.link}>GitHub account</a>.</p>

            <p className={styles.signature}> - Jaxon</p>
        </div>
    );
};

export default About;