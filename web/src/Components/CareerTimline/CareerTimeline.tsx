import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  homerun from '../../assets/homerun.svg'
import { CareerTimelineProps } from '../../Constants/Types';
import { faReact, faAngular, faNode, faGolang, faPython, faAws } from '@fortawesome/free-brands-svg-icons';

const CareerTimeline: React.FC<CareerTimelineProps> = ({ jobs }) => {
  return (
    <div>
      <Grid container spacing={2}>
      <Grid item xs={4} >
      <img src={homerun} alt="Welcome" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
      <br/>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faReact} size="2xl" /></span>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faAngular} size="2xl" /></span>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faNode} size="2xl" /></span>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faGolang} size="2xl" /></span>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faPython} size="2xl" /></span>
      <span style={{padding:"2%"}}><FontAwesomeIcon icon={faAws} size="2xl" /></span>
      </Grid>
        <Grid item xs={8} style={{padding:"10%"}}></Grid>

        <Timeline position="alternate">
          {jobs.map((job: any, index: any) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < jobs.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5" component="h1">
                  {job.title}<FontAwesomeIcon icon={faMeteor} />
                </Typography>
                <Typography>{job.date}</Typography>
                <Typography>{job.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        </Grid>
    </div >
  );
};

export default CareerTimeline;
