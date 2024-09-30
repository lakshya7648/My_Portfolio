/**
 * Node modules
 */
import { motion } from "framer-motion";


/**
 * Components
 */
import Button from "./Button";


const Home = () => {

  return (
    <motion.section 
      id="home" 
      className="relative flex flex-col gap-2 justify-center items-center top-20 mx-12 self-center px-2 py-4 mb-32 md:flex-row-reverse md:pt-16 md:gap-12 md:p-4 lg:gap-32"
      initial = {{
        opacity : 0,
      }}
      whileInView = { {
        opacity: 1,
      } }
      transition = { {
        duration: 1.5,
        ease: "easeInOut"
      } }
    >

      <figure className="pt-4 bg-blue-300 w-32 h-32 rounded-full md:w-80 md:h-80">
        <img
          src="/person.png"
          alt="My Portfolio Image"
          className="py-1 md:py-8"
        />
      </figure>

      <div>

      <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start md:gap-0">

        <h1 className="text-5xl w-[300px] font-semibold py-3 text-center font-NotoSans leading-tight md:text-start md:w-[400px] md:text-5xl md:py-2 tracking-tight">
          I'm{" "}
          <span className="site-color font-bold tracking-tight text-5xl md:text-6xl">
            Lakshya Kumar
          </span>
          ,{" "}
          <span className="text-pink-700 font-bold tracking-tight text-5xl md:text-5xl">
            Full Stack Developer
          </span>
        </h1>

        <div className="mt-4 w-full items-center md:mt-2">
          
          <h4 className="text-[18px] py-2 font-NotoSans font-semibold text-slate-500/90 md:py-1">
            About
          </h4>

          <p className="description">
            Hi, I am Lakshya Kumar, Aspiring Full Stack Developer with a strong foundation in
            programming fundamentals. I'm driven to design and develop innovative, 
            efficient and visually stunning applications. Explore my portfolio and let's build something amazing together. 
          </p>

        </div>

      </div>

      <div className="flex w-full py-4 my-2 gap-6 items-center px-2">

          <Button
            labels = {"Contact Me!"}
            href={"#contact"}
            className={"btn-secondary"}
          />

          <Button 
            href={"https://docs.google.com/document/d/1W5Qnz-S6oyV9YowMhGrckRb8Qk6sqxfHr5_noE3hycM/edit?usp=sharing"}
            className={"btn-dark flex items-center justify-center gap-1"}
            target={"_blank"}
            labels={"Get Resume"}
            icon={"open_in_new"}
            iconClass={"material-symbols-rounded text-[18px]"}
          />

      </div> 

      </div> 
      
    </motion.section >
  );
};

export default Home;
