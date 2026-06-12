import React from "react";
import styles from "/src/Components/Hero/Hero.module.css"
import Profile from "/assets/hero/reks.jpg";

function Hero() {
    return (
        <section className={styles.container} id="main">
            <div className={styles.content}>
                <h1 className={styles.title}>I'm <span className={styles.spanTag}>A</span>ntony <span className={styles.spanTag}>A</span>mal <span className={styles.spanTag}>R</span>ekshin</h1>
                <h3 className={styles.domain}>Frontend Developer</h3>
                <p className={styles.discribtion}>
                    I'm Rekshin, as a front-end web developer, you likely have a
                    keen eye for design and detail, working with technologies
                    like HTML, CSS to create visually appealing and interactive
                    websites. My role combines creativity with technical skills,
                    ensuring that user interfaces are both functional and
                    aesthetically pleasing. It's a great fieldfor someone with a
                    passion for web design and user experience!!!
                </p>
                <a href="mailto:antonyamalrekshin@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={Profile} alt="Profile" className={styles.heroImg} />
            {/* <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div> */}
        </section>
    );
};

export default Hero;