/**
 * Components
 */
import Button from "./Button"


const Footer = () => {

    const sitemap = [
        {
            id : 31, 
            itemName:"Home",
            href : "#home"
        },
        {
            id : 32,
            itemName:"About",
            href : "#about"
        },
        {
            id : 33, 
            itemName:"Skills",
            href : "#skills"
        },
        {
            id : 34, 
            itemName:"Projects",
            href : "#projects"
        },
        {
            id : 35,
            itemName:"Contact",
            href : "#contact"
        },
    ]

    
    const socials =  [ 
        {
            id : 41,
            platformName : "Linkedin",
            platformLink : "http://linkedin.com/in/lakshya-kumar-a0a858205/",
        },
        {
            id : 42,
            platformName : "Github",
            platformLink : "http://github.com/lakshya7648",
        },
  ]

  return (
    <footer
        className="bg-slate-900 p-4"
    >

        <div className="p-2 m-2 md:p-4 md:my-6 ">

            <div className="flex gap-2 md:justify-evenly">

                <div className="mr-8">
                    
                    <h1 className="headline mb-2 md:mb-4">Let's Collaborate!</h1>
                    
                    <Button 
                        labels={"Connect"}
                        href={"mailto:lakshyaofficial0786@gmail.com"}
                        className={"btn-secondary flex justify-center items-center w-28 md:w-32"}
                        icon={"chevron_right"}
                        target={"_blank"}
                        iconClass={"material-symbols-rounded"}
                    />
                
                </div>

                <div className="flex gap-8 md:gap-20">

                    <div className="flex flex-col">
                        
                        <h4 className="description py-2">Sitemap</h4>
                        
                        {sitemap.map(({ id, itemName, href }) => {
                        return ( <a 
                            key={id}
                            href={href} 
                            className="footer-link">{itemName}</a>)
                        })}
                   
                    </div>

                    <div className="flex flex-col">
                        
                        <h4 className="description py-2">Social Links</h4>

                        {socials.map(({ id, platformName, platformLink })=> {
                            return (
                                <a 
                                    key = { id }
                                    href={platformLink} 
                                    target="_blank"
                                    className="footer-link">{ platformName } </a>
                            )
                        })}

                    </div>

                </div>

            </div>

            <div className="px-2 pt-2 mt-6 flex justify-center items-center">
                
                <p className="tracking-wide font-NotoSans text-xs">&copy; <span className="text-slate-500/80">2024</span> : Lakshya Kumar</p>
            
            </div>
        </div>

    </footer>
  )
}

export default Footer
