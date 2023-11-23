import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import { URLS } from '../../Constants/DataObjects';

const ResumeDownloadButton = () => {
    const [downloadUrl, setDownloadUrl] = useState(null);

    useEffect(() => {

      const fetchPresignedURL = async () => {  
        try {
          const response = await fetch(URLS.prod.Resume);
          if (!response.ok) {
            throw new Error('Failed to fetch presigned URL');
          }
  
          const data = await response.json();
          setDownloadUrl(data.url);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchPresignedURL();
    }, []);
  
    const handleDownloadClick = () => {
      if (downloadUrl) {
        window.open(downloadUrl, '_blank');
      }
    };

  return (
    <div>
        <Button  endIcon={<FontAwesomeIcon icon={faDownload}/>}  onClick={handleDownloadClick} >
        <Typography  >
            Download Resume
        </Typography>       
        </Button>
    </div>
  );
};

export default ResumeDownloadButton;
