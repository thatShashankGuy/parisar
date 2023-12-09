import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import support from '../../assets/support.svg';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from '@mui/material';
import {ImpRef} from '../../Constants/DataObjects'
const Projects = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Container>
          <img src={support} alt="Success" style={{ maxWidth: '100%',height:"auto"}} />
        </Container>
      </Grid>
      <Grid item xs={8}>
        <List>
          {<ListItem>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline' }}
                  variant={!isMobile ? "h4" :'body2' } component={!isMobile ? "h1" : "body"}
                  color="text.primary"
                >
                  Check Out <a href={ImpRef.nibandh_pages}> nibandh</a> - a comprehensive and evolving repository where we document concise, practical reference materials encountered during our tech learning and usage journey { }
                  <FontAwesomeIcon icon={faMeteor} />
                </Typography>
              }
            />
          </ListItem>}
        </List>
        <Typography 
            sx={{ display: 'inline', textDecoration: 'underline;' , fontStyle: 'italic'}}
            component="p"
            variant={!isMobile ? "h4" :'body2' }
            color="text.primary"
        
        >Note : nibandh is actively looking for contributors. Please reach out over <a href="mailto:shashankforworkshekhar@gmail.com">email</a> or check out the <a href={ImpRef.nibandh_repo}>git repo</a> if you are interested.</Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
