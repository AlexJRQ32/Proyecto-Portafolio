import { NavLink } from "react-router-dom"
import "./Button.css"

function Button({ text, className, redirect }) {
  const isHash = redirect?.startsWith('#')
  const isFile = redirect?.startsWith('/')

  if (isHash) {
    return(
      <a className={className} href={redirect}>
        {text}
      </a>
    )
  }

  if (isFile) {
    return(
      <a className={className} href={redirect} download>
        {text}
      </a>
    )
  }

  return(
    <NavLink className={className} to={`/${redirect}`}>
      {text}
    </NavLink>
  )
}

export default Button
