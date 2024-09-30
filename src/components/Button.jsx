/**
 * Node Modules
 */
import PropTypes from "prop-types"


const Button = ({ labels, href, icon, iconClass, className, target }) => {
  return (
    <a
        href = {href}
        className={className}
        target = { target || "_self" }
    >
        { labels } {icon && <span className={iconClass}>{ icon }</span>}
    </a>
  )
}


Button.propTypes = {
  labels : PropTypes.string,
  href : PropTypes.string,
  icon : PropTypes.string,
  iconClass : PropTypes.string,
  className : PropTypes.string,
  target : PropTypes.string,
}


export default Button