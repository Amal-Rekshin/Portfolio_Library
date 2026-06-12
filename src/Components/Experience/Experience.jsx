import React from "react";
import skills from '../../Data/Skills.json';
import history from '../../Data/History.json';
import styles from "/src/Components/Experience/Experience.module.css"

function Experience() {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id)=>{
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                    }</div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem,id)=>{
                            return <li key={id} className={styles.historyItem}>
                                <img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetail}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience,id)=>{
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Experience;
