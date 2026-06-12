import React from 'react';
import emailIcon from '/assets/contact/emailIcon.png';
import githubIcon from '/assets/contact/githubIcon.png';
import linkedin from '/assets/contact/linkedinIcon.png';
import styles from '/src/Components/Contact/Contact.module.css';

function Contact() {
return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="Email Icon" />
                <a href="mailto:antonyamalrekshin@gmail.com">antonyamalrekshin@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="Github Icon" />
                <a href="https://github.com/Amal-Rekshin">Amal-Rekshin</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/antony-amal-rekshin-a-751537281/">Antony Amal Rekshin</a>
            </li>
        </ul>
    </footer>
)
}

export default Contact
