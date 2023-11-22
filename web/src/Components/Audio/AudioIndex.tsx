import { Grid, Typography, List, Box } from "@mui/material"
import { Widget, CoverImage,generate } from "./Misc";
import audInd from '../../assets/podcast.svg'


const PodcastIndex = () => {

  return <>


    <Widget>

      <Box sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CoverImage>
              <img alt="Conversations" src={audInd} />
            </CoverImage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                NAME NOT DECIDED
            </Typography>
            <List>
              {generate()}
            </List>
          </Grid>
        </Grid>
      </Box>

    </Widget>
  </>
}

export default PodcastIndex