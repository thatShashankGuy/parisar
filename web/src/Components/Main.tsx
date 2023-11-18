import {  Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing'
import Blog from './Projects/InSights';
import Feedback from './Feedback/Feedback';
import CareerTimeline from './CareerTimline/CareerTimeline'
import About from './About/About';
import Service404 from './Shared/Service404';
import {careerEvents,blogLinks} from '../Constants/DataObjects'

const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<CareerTimeline jobs={careerEvents}/>}/>
        <Route path="/project" element={<Blog blogs={blogLinks} />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path = "*" element={<Service404 component={""}/>}/>
      </Routes>
  );
}

export default Main;
