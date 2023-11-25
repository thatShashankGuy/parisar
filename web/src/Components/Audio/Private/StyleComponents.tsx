import Typography from '@mui/material/Typography/Typography';
import { styled } from '@mui/material/styles';

export const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  marginLeft: 260,
  borderRadius: 16,
  width: 1200,
  maxWidth: '100%',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
  opacity: 0.8,
  [theme.breakpoints.down('md')]: {
    marginLeft: 16,
    width: '100%',
  },
}));

export const CoverImage = styled('div')(({ theme }) => ({
  width: 300,
  height: 200,
  objectFit: 'fill',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', 
  },
}));

export const TinyText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.6rem',
  },
}));


