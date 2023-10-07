import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
export default function Footer(){

    return (
        <div className="foot">
              <p>&copy; 2023 @thatshashankguy<FontAwesomeIcon icon={faMeteor}/></p>
        </div>
      
    )
}