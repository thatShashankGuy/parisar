import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import support from '../../assets/support.svg';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BlogProps } from '../../Constants/Types';

const Blogs: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Container>
          <img src={support} alt="Success" style={{ maxWidth: '75%' }} />
        </Container>
      </Grid>
      <Grid item xs={8}>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline' }}
                  variant="h4" component="h1"
                  color="text.primary"
                >
                  Check Out <a href='https://github.com/thatShashankGuy/_InSights'>_InSights</a> - a comprehensive and evolving repository where we document concise, practical reference materials encountered during our tech learning and usage journey { }
                  <FontAwesomeIcon icon={faMeteor} />
                </Typography>
              }
            />
          </ListItem>
          {blogs.map((blog, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faMeteor} />
              </ListItemIcon>
              <a href={blog.address} target="_blank" rel="noopener noreferrer">
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: 'inline', textDecoration: 'underline' }}
                      component="p"
                      variant="h5"
                      color="text.primary"
                    >
                      {blog.name}
                    </Typography>
                  }
                />
              </a>
            </ListItem>
          ))}
        </List>
        <Typography 
            sx={{ display: 'inline', textDecoration: 'underline;' , fontStyle: 'italic'}}
            component="p"
            variant="h6"
            color="text.primary"
        
        >Note : We are actively Looking for contributors for Insight. Please <a href="mailto:shashankforworkshekhar@gmail.com">reach out</a> if you are interested.</Typography>
      </Grid>
    </Grid>
  );
};

export default Blogs;
