/**
 * Node modules
 */
import { motion } from "framer-motion";


/**
 * Components
 */

import ProjectsCard from "./ProjectsCard";



const Projects = () => {

    let projectIdCount = 301, skillIdCount = 11;
    
    const projectsList = [
        {
            id: projectIdCount++,
            imgSrc:"myportfolio.jpg",
            projectName:"My Portfolio",
            codeLink : "",
            description : "This is my portfolio where you'll find all my information.",
            skillsUsed : [
                {id:skillIdCount++, skill : "React"},
                {id:skillIdCount++, skill : "TailwindCSS"},
            ]
        },
        {
            id: projectIdCount++,
            imgSrc:"apnikhabar.png",
            projectName:"Apni Khabar News App",
            codeLink : "https://github.com/lakshya7648/Apni-Khabar-News-App-Using-React",
            description : "Apni Khabar: A news app built with React and NewsAPI that delivers real-time news updates.",
            skillsUsed : [
                {id:skillIdCount++, skill : "React"},
                {id:skillIdCount++, skill : "Bootstrap"},
                {id:skillIdCount++, skill : "NewsAPI"},
            ]
        },
        {
            id: projectIdCount++,
            imgSrc:"lazezz.png",
            projectName:"Lazezz : An online food ordering Website",
            codeLink : "https://github.com/lakshya7648/Lazezz-Online-Food-Delivery-website-using-django",
            description : "Lazezz is a full-stack online food ordering website that connects users with restaurants to discover their preferred meals.",
            skillsUsed : [
                {id:skillIdCount++, skill : "HTML"},
                {id:skillIdCount++, skill : "CSS"},
                {id:skillIdCount++, skill : "Javascript"},
                {id:skillIdCount++, skill : "Bootstrap"},
                {id:skillIdCount++, skill : "Python"},
                {id:skillIdCount++, skill : "Django"},
                {id:skillIdCount++, skill : "MySQL"},
            ]
        },
        {
            id: projectIdCount++,
            imgSrc:"eclass.png",
            projectName:"eClassroom App",
            codeLink : "https://github.com/lakshya7648/eClassroom-App-Built-using-MERN/tree/main",
            description : "eClassroom: A MERN stack app that connects students and teachers for virtual learning.",
            skillsUsed : [
                {id:skillIdCount++, skill : "React"},
                {id:skillIdCount++, skill : "Express"},
                {id:skillIdCount++, skill : "Node"},
                {id:skillIdCount++, skill : "MongoDB"},
                {id:skillIdCount++, skill : "TailwindCSS"},
                {id:skillIdCount++, skill : "SocketIO"},
            ]
        },
    ]


  return (
    <motion.section 
        className="section-box" 
        id="projects"
        initial = {{
            opacity: 0,
            transform:"translateY(100px)"
        }}
        whileInView={{
            opacity:1,
            transform:"translateY(0px)"
        }}
        transition={{
            ease:"easeInOut",
            duration:1,
        }}
    >

        <div className="box">
    
            <h1 className="headline">Projects</h1>
    
            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {projectsList.map(({ 
                    id, 
                    imgSrc,
                    projectName, 
                    codeLink, 
                    description, 
                    skillsUsed 
                }) => {
                    return (
                        <ProjectsCard 
                            key={id}
                            imgSrc={imgSrc}
                            projectName = {projectName}
                            codeLink = {codeLink}
                            description = {description}
                            skillsUsed = {skillsUsed}
                        />
                    ) 
                })}

            </div>
    
        </div>
    
    </motion.section>
  )
}

export default Projects
