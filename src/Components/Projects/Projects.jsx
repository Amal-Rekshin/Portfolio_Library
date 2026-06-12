import React from "react";
import projects from "/src/Data/Project.json"
import styles from "/src/Components/Projects/Projects.module.css";
import ProjectCard from "./ProjectCard";
function Projects() {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project,id)=>{
                        return <ProjectCard key={id} project={project} />
                    
                    })
                }
            </div>
        </section>
    );
}

export default Projects;
