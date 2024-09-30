/**
 * Node modules
 */
import PropTypes from "prop-types";

const SkillsTags = ({ skill }) => {
  return (
    <span className="bg-slate-900/80 rounded-md text-white text-xs px-2 py-1 font-NotoSans hover:ring-1 hover:ring-white/50">{skill}</span>
  )
}

SkillsTags.propTypes = {
    skill : PropTypes.string.isRequired,
}

export default SkillsTags