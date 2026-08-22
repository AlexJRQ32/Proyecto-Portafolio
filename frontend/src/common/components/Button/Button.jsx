import { NavLink } from "react-router-dom"
import "./Button.css"

function Button({ text, className, redirect }) {
  return(
    <NavLink className={className} to={redirect === '#' ? '#' : `/${redirect}`}>
      {text}
    </NavLink>
  )
}

export default Button