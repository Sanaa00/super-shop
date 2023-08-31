
import './Button.style.css'
// eslint-disable-next-line react/prop-types
function Button({text,icon,onClick,type}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className='button'>
         {icon? <p className='button-icons'>{icon}</p>:null}    <p className='button-text'>{ text}</p>
    </button>
  )
}

export default Button
