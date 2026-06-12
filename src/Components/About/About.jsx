import React from 'react';
import aboutImg from '/assets/about/aboutImage.png';
import cursor from '/assets/about/cursorIcon.png';
import severIcon from '/assets/about/serverIcon.png';
import UIicon from '/assets/about/uiIcon.png';
import styles from '/src/Components/About/About.module.css';


function About() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title} id='about'>About</h1>
            <div className={styles.content}>
                <img src={aboutImg} alt="Me Sitting with Laptop" 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursor} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experiment in building responsive and optimize site</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={severIcon} alt="backend" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized back-end system and API's</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={UIicon} alt="UI" />
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>I have multiple responsive pages in many software's like figma, adobeXD</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About
