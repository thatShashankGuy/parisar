import {  Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing'
import Projects from './Projects/Projects';
import Feedback from './Feedback/Feedback';
import CareerTimeline from './CareerTimline/CareerTimeline'
import About from './About/About';
import Service404 from './Shared/Service404';
import {careerEvents} from '../Constants/DataObjects'

const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<CareerTimeline jobs={careerEvents}/>}/>
        <Route path="/project" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
       
        {/* vartalaap have its own site now 
         <Route path="/audio" element={<AudioIndex />} />
        <Route path="/player" element={<AudioPlayer />} /> */}
        <Route path = "*" element={<Service404 component={""}/>}/>
      </Routes>
  );
}

export default Main;
