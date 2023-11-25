import React from 'react';
import { faCirclePlay, faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { AudioIndexItem } from '../../Constants/Types';
import { fetchAudio } from './Private/Services';
import { useNavigate } from 'react-router-dom';
import { PodcastList } from '../../Constants/DataObjects';


const GenerateAudioList = () => {
  return PodcastList.map((obj) =>
    <AudioListItems key={obj.ID} name={obj.Name} episodeId={obj.EpisodeId} logId={obj.logId}></AudioListItems>
  );
}

const AudioListItems: React.FC<AudioIndexItem> = ({ logId, name,episodeId}) => {
  const navigate = useNavigate();
  async function playRequestedAudio() {
    try {
      const audioUrl = await fetchAudio(logId);
      if (audioUrl) {
        navigate('/player', { state: { data: audioUrl,logId : logId, name:name,episodeId :episodeId } })
      }
    } catch (error: any) {
      console.log(error.message)
      throw error.message
    }

  }
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="play" onClick={playRequestedAudio}>
          <FontAwesomeIcon icon={faCirclePlay} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FontAwesomeIcon icon={faMeteor} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${episodeId}\u2014${name}`} />
    </ListItem>
  )
}

export default GenerateAudioList

