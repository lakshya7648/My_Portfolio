/**
 * Node Modules
 */
import PropTypes from "prop-types"


const SkillBox = ({ imgSrc, skillName, className }) => {
  return (
    <div 
    className={className}
    >
      <figure className="w-20 h-20 rounded-md overflow-hidden">
        <img 
            src={imgSrc} 
            alt={skillName} 
            className="bg-transparent cover w-20 h-20 rounded-md"
        />
      </figure>
      <span className='description py-2 hover:text-white'>{skillName}</span>
    </div>
  )
}


SkillBox.propTypes = {
  imgSrc : PropTypes.string.isRequired,
  skillName : PropTypes.string.isRequired,
  className : PropTypes.string,
}


export default SkillBox