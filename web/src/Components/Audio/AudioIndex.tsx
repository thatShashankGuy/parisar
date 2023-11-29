import { Grid, Typography, List, Box } from "@mui/material"
import  GenerateAudioList  from "./GenerateAudioList";
import { Widget,CoverImage } from "./Private/StyleComponents";
import podcast from '../../assets/podcast.svg'
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from '@mui/material';

const PodcastIndex = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return <>
<Widget>
  <Box sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
    <Grid container spacing={2}>

      {/* Audio list grid */}
      <Grid item xs={12} sm={9} md={9}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          The half-byte broadcast <FontAwesomeIcon icon={faHeadphonesAlt}/>
        </Typography>
        <List>
          {GenerateAudioList()}
        </List>
      </Grid>

      {/* Cover image grid */}
      {!isMobile ? <Grid item xs={12} sm={3} md={3}>
        <CoverImage>
          <img alt="Conversations" src={podcast} />
        </CoverImage>
      </Grid>: <></> }

    </Grid>
  </Box>
</Widget>

  </>
}

export default PodcastIndex


