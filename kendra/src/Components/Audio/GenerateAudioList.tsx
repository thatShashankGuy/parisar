import React, { useEffect, useState } from 'react';
import { faCirclePlay, faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { AudioIndexItem } from '../../Constants/Types';
import { fetchAudio } from './Private/Services';
import { useNavigate } from 'react-router-dom';

import { URLS } from '../../config';


const GenerateAudioList = () => {
  const [episodelist,setEpisodelist] = useState<any[]>([])

  useEffect(()=>{
    async function fetchEpList(){
        const response = await fetch(URLS.Episodelist,{
          method:"GET",
          headers:{
            "Content-Type" : "application/json"
          }
        })

        if(!response.ok){
          throw new Error("error occurred while fetching list")
        }

        const data = await response.json()
        console.log(data)
        if(data){
          setEpisodelist(data)
        }
    }

    fetchEpList()
  },[])
  return episodelist.map((obj,index) =>
    <AudioListItems key={index} name={obj.Name} episodeId={obj.EpisodeId} logId={obj.logId}></AudioListItems>
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

