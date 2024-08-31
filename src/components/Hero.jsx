import React from 'react';
import styles from '../Styles/Hero.module.css';
// import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import 'animate.css';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id='home' className={styles.heroSection}>
      <div className={styles.hero}></div>
      <motion.div
        ref={ref}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? "-79vh" : "-100vh" }}
        transition={{ duration: 1, delay: 0.7 }}
        className={styles.heroContent}>
        <h1 className={`${styles.title}`}>
          {t('hero.title')}
        </h1>
        <p className={styles.desc}>{t('hero.desc')}</p>
        {/* <Link to="destinations" className={styles.ctaButton}>{t('hero.Button')}</Link> */}
      </motion.div>
    </section>
  );
};

export default Hero;

