import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import convo from '../../assets/convo.svg'
import { faCircleChevronLeft, faHeadphonesAlt, faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Widget,TinyText, CoverImage} from './Private/StyleComponents';
import { useLocation } from 'react-router';
import { BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef :any = useRef<HTMLAudioElement | null>(null);
  
  const theme = useTheme();
  const location = useLocation();
  const locationState = {
    audioSrc : location.state?.data,
    id : location.state?.logId,
    name : location.state?.name,
    episode : location.state?.episodeId
  };
  
 
  const handleMetadataLoaded = (e:any) => {
    setDuration(e.target.duration);
};

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    console.log(event)
    if (audioRef.current) {
        const newTime = typeof newValue === 'number' ? newValue : 0;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }
};

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  return (
    <>
          <Box sx={{ ml: 3, minWidth: 0,display: 'grid', alignItems: 'center'}}>
 
      </Box>

    <Box sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
      <Widget>
      <BottomNavigationAction component={Link} to='/audio' label="Podcast" icon={<FontAwesomeIcon icon={faCircleChevronLeft} size='lg'/>}/>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="Conversations"
              src={convo}
            />
          </CoverImage>
          <Box sx={{ ml: 3, minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              The half-byte broadcast <FontAwesomeIcon icon={faHeadphonesAlt}/>
            </Typography>
            <Typography noWrap>
              <b>{locationState.episode}&mdash;{locationState.name} <FontAwesomeIcon icon={faMeteor}/> </b>
            </Typography>
          </Box>
          <audio
            style={{ display: "none" }}
            ref={audioRef}
            controls
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={handleMetadataLoaded}
          >
            <source src={locationState.audioSrc} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={currentTime}
          min={0}
          onChange={handleSliderChange}
          max={audioRef.current?.duration || 0}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
                  }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(Math.floor(currentTime))}</TinyText>
          <TinyText>-{formatDuration(Math.floor(duration - currentTime))}</TinyText>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song" disabled>
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={!isPlaying ? 'play' : 'pause'}
            onClick={togglePlay}
          >
            {!isPlaying ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song" disabled>
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor}  />
          </IconButton>
        </Box>

      </Widget>
    </Box>
    </>
  );
}
