/**
 * Node modules
 */
import { motion } from "framer-motion"


/**
 * Components
 */

import SkillBox from "./SkillBox"


const Skills = () => {
    const skillsList = [
        {
            id:201,
            skillName:"HTML",
            imgSrc:"html.png",
        },
        {
            id:202,
            skillName:"CSS",
            imgSrc:"css.png",
        },
        {
            id:203,
            skillName:"Javascript",
            imgSrc:"js.png",
        },
        {
            id:204,
            skillName:"Python",
            imgSrc:"python.png",
        },
        {
            id:205,
            skillName:"Bootstrap",
            imgSrc:"bootstrap.png",
        },
        {
            id:206,
            skillName:"TailwindCSS",
            imgSrc:"tailwind.png",
        },
        {
            id:207,
            skillName:"ReactJs",
            imgSrc:"react.png",
        },
        {
            id:208,
            skillName:"NodeJs",
            imgSrc:"node.png",
        },
        {
            id:209,
            skillName:"ExpressJs",
            imgSrc:"express.png",
        },
        {
            id:210,
            skillName:"MongoDB",
            imgSrc:"mongo.png",
        },
        {
            id:211,
            skillName:"Django",
            imgSrc:"django.png",
        },
        {
            id:212,
            skillName:"Git",
            imgSrc:"gitimg.png",
        },
        {
            id:213,
            skillName:"Github",
            imgSrc:"githubimg.png",
        },
        {
            id:214,
            skillName:"MySQL",
            imgSrc:"mysql.png",
        },
    ]


  return (
    <motion.section 
        id="skills"
        className="section-box"
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
      <h1 className="headline pb-2">Skills</h1>
      
      <div className="grid grid-cols-3 gap-5 space-y-2 mt-4 grid-flow-row md:grid-cols-5 lg:grid-cols-8">
        
        {skillsList.map(({ id, skillName, imgSrc }) => {
            return (
                <SkillBox 
                    key={id}
                    imgSrc={imgSrc}
                    skillName={skillName}
                    className={"skills-box"}
                />
            )
        })}
      
      </div>
      </div>
    
    </motion.section>
  )
}

export default Skills
