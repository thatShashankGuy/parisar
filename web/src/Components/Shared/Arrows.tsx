import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Arrows.css'

const Arrows = () => {
    return (
        <div className="arrows-container">
            <div>
                <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowCircleDown} size="2x" />
            </div>
        </div>
    );
};

export default Arrows;
