import React from "react";
// import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Description from "../../components/Description";
import FamousActivities from "../../components/FamousActivities";
import Cards from "../../components/Cards";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import styles from "../../Styles/MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Hero />
      <Description />
      <Cards />
      <FamousActivities />
      <Services />
      <Footer />

      {/* <main className={styles.content}>
        <section id="destinations" className={styles.section}>
          <h2 className={styles.heading}>Popular Destinations</h2>
          <p className={styles.paragraph}>Explore our most popular travel destinations...</p>
        </section>
        <section id="tours" className={styles.section}>
          <h2 className={styles.heading}>Top Tours</h2>
          <p className={styles.paragraph}>Join our top-rated tours and discover new adventures...</p>
        </section>
        <section id="contact" className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.paragraph}>Get in touch with us to plan your perfect trip...</p>
        </section>
      </main> */}
    </div>
  );
};

export default MainPage;
