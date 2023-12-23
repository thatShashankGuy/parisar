import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import support from '../../assets/support.svg';

import { useMediaQuery } from '@mui/material';
import {ImpRef} from '../../Constants/DataObjects'
const Projects = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} >
        {!isMobile ? <Container>
          <img src={support} alt="Success" style={{ maxWidth: '100%',height:"auto"}} />
        </Container>
        : null}
      </Grid>
      <Grid item xs={isMobile ? 12 : 8}>
        <List>
          {<ListItem>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline' }}
                  variant={!isMobile ? "h4" :'body2' } component={!isMobile ? "h1" : "body"}
                  color="text.primary"
                >
                  Check Out <a href={ImpRef.nibandh_pages}> "nibandh"</a> - a comprehensive and evolving repository where we document concise, practical reference materials encountered during our tech learning and usage journey { }

                </Typography>
              }
            />
                      <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline' }}
                  variant={!isMobile ? "h4" :'body2' } component={!isMobile ? "h1" : "body"}
                  color="text.primary"
                >
                  Check Out <a href={ImpRef.vartalaap_site}> "vartalaap"</a> - my semi - technical show which I host over its own web platform.
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
        
        ><strong><i>Note</i></strong> : "nibandh" is actively looking for contributors. Please reach out over <a href="mailto:shashankforworkshekhar@gmail.com">email</a> or check out the <a href={ImpRef.nibandh_repo}>git repo</a> if you are interested.</Typography><br />
      <Typography 
            sx={{ display: 'inline', textDecoration: 'underline;' , fontStyle: 'italic'}}
            component="p"
            variant={!isMobile ? "h4" :'body2' }
            color="text.primary"
        
        ><strong><i>Announcement</i></strong> :  <strong>"vartalaap"</strong>  previously part of <strong>"kendra"</strong> is now being hosted independently . Head over <a href={ImpRef.vartalaap_site}>to the site</a>  to enjoy the show
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
