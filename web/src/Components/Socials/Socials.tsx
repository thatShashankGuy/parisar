import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Socials.css'
import { useEffect, useState } from "react";

type SocialProps =  {
   darkMode :boolean
}

const Socials : React.FC<SocialProps> = ({darkMode}) =>{
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