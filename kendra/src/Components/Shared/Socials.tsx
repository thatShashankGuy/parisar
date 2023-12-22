import { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../Styles/Socials.css'
import { modeProps } from "../../Constants/Types";



const Socials : React.FC<modeProps> = ({darkMode}) =>{
   const [modeClass,setModeClass] = useState('social-links')

   useEffect(()=>{
     darkMode ? setModeClass('social-links') : setModeClass('social-links-dark')
   },[darkMode])

   return(<>
   <span>
   <a href="https://github.com/thatShashankGuy" target="_blank" rel="noopener noreferrer" className={modeClass}>
      <FontAwesomeIcon icon={faGithub} size="lg"/>
   </a>
   </span>   
      <span>      </span>
   <span>  
   <a href="https://www.linkedin.com/in/thatshashanguy/" target="_blank" rel="noopener noreferrer" className={modeClass}>
         <FontAwesomeIcon icon={faLinkedin} size="lg" />
   </a>
   </span> 
      <span>      </span>
      <span>
      <a href="mailto:shashankforworkshekhar@gmail.com" target="_blank" rel="noopener noreferrer" className={modeClass}>
         <FontAwesomeIcon icon={faEnvelope} size="lg" />
         </a>
         </span>
   </>)
}

export default Socials