import {  Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing'
import Blog from './Blogs/Blogs';
import Feedback from './Feedback/Feedback';
import useScrollNavigation from '../Custom/scrollNavigate';
import CareerTimeline from './CareerTimline/CareerTimeline'
import About from './About/About';
import {careerEvents,blogLinks} from '../Constants/DataObjects'

const Main = () => {
  useScrollNavigation();
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<CareerTimeline jobs={careerEvents}/>}/>
        <Route path="/blog" element={<Blog blogs={blogLinks} />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
  );
}

export default Main;
