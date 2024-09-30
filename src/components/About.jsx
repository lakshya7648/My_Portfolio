/**
 * Node modules
 */
import { motion } from "framer-motion"



const About = () => {

  return (
    <motion.section 
      id="about"
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
    <div className="box flex flex-col justify-start gap-3">
      <h1 className="headline">About</h1>
      <p className="description-2">Welcome to my portfolio! I’m an enthusiastic and detail-oriented <strong className="text-white">Full Stack Developer</strong> eager to launch my career in both job applications and freelancing. Proficient in the MERN Stack, HTML, CSS, and JavaScript, I have developed a solid foundation in creating, deploying, and maintaining dynamic web applications. My personal projects showcase my ability to design interactive user interfaces and implement efficient backend solutions, reflecting my commitment to high-quality work. I prioritize open communication and collaboration, ensuring that I address challenges effectively and adapt to project requirements. Driven by a passion for continuous learning and staying updated with industry best practices, I am excited to embrace new opportunities and collaborate on innovative projects. Thank you for exploring my portfolio!




</p>
    </div>
    </motion.section>
  )
}

export default About
