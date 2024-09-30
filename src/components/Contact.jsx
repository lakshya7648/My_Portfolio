/**
 * Node modules
 */
import { motion } from "framer-motion";


const Contact = () => {

  const socialLinks = [
    {
      id : 21,
      platformName : "Linkedin",
      platformLink : "http://linkedin.com/in/lakshya-kumar-a0a858205/",
      imgSrc : "linkedin.png",
    },
    {
      id : 22,
      platformName : "Github",
      platformLink : "http://github.com/lakshya7648",
      imgSrc : "githubimg.png",
    },
  ]



  return (
    <motion.section 
      className="section-box" 
      id="contact"
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
        
        <h1 className="headline">Contact Me!</h1>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
            <h5 className="py-3 my-2 text-base text-slate-500/80 font-bold">Let's connect</h5>
            <div className="flex gap-3">
          {socialLinks.map(({ id, platformName, platformLink, imgSrc }) => {

           return ( <a 
              key={id}
              href={platformLink}
              target="_blank"
              aria-label={platformName}
              className="w-7 h-7 overflow-hidden">
                <img 
                src={imgSrc} 
                alt={platformName} 
                className="w-6 h-6" />
            </a>)

          })}
          </div>

        </div>


        <form 
          action={import.meta.env.VITE_FORM_LINK}
          method="post"
          className="flex flex-col my-4"
        >
          <h4 className="text-lg text-white font-bold text-center font-NotoSans py-2">Contact Form</h4>
        
          <label 
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            required
            minLength={3}
            autoComplete="name"
            placeholder="Lakshya Kumar"
          />

          <label 
          htmlFor="email" 
          className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            required
            minLength={3}
            placeholder="xyz@example.com"
          />
        
          <label 
            htmlFor="message" 
            className="form-label">Message</label>
          <textarea 
            className="form-input min-h-32 max-h-96"
            name="message" 
            id="message"
            required
            minLength={10}
            placeholder="Hi!"
          >
          </textarea>

          <input 
            type="hidden" 
            name="_gotcha" 
            style={ { display:"none !important" } } />

          <button 
            type="submit"
            className="btn-secondary flex justify-center items-center gap-1 w-24 mx-auto">
            Send <span className="material-symbols-rounded text-xs">send</span>
          </button>

        </form>
    
        </div>
    
      </div>
    
    </motion.section>
  );
};

export default Contact;
