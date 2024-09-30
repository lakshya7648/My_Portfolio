/**
 * Node Modules
 */

import PropTypes from "prop-types"

/**
 * Components
 */

import SkillsTags from "./SkillsTags"
import Button from "./Button"


const ProjectsCard = ({
    imgSrc,
    projectName,
    codeLink,
    description,
    skillsUsed
}) => {
  return (
    <div className="flex flex-col justify-center items-start bg-slate-700/50 rounded-md border border-slate-900/50 p-5 my-4 hover:border-white/10 space-y-2 hover:scale-105 transition-all duration-100">

        <figure className="rounded-md overflow-hidden">
        
            <img 
                src={imgSrc}
                alt={projectName}
            />
        
        </figure>

        <div className="flex flex-col justify-between  w-full py-1 space-y-2">

            <h4 className = "text-[16px] font-semibold font-NotoSans">
                {projectName}
            </h4>

            {/* <a 
            href={codeLink} 
            className="btn-project-link flex gap-2 self-start" 
            target="_blank"
            >
                Code
                <span className="material-symbols-rounded text-sm">open_in_new</span>
            </a> */}
            <Button 
                labels={"Code"}
                href={codeLink}
                className={"btn-project-link flex gap-2 self-start"}
                target={"_blank"}
                icon={"open_in_new"}
                iconClass={"material-symbols-rounded text-sm"}
            />
            
        </div>

       
        <div className="flex gap-1 flex-wrap" >
                
                {skillsUsed.map(({ id, skill }) => {
                    return (
                        <SkillsTags 
                            key = { id }  
                            skill = { skill }
                        />
                    )
                })}

            </div>

        <p className="description-2 py-2 hover:text-white">{description}</p>

    </div>
  )
}


ProjectsCard.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    projectName : PropTypes.string.isRequired,
    codeLink : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skillsUsed : PropTypes.array.isRequired,
}


export default ProjectsCard