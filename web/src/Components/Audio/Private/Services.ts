import { URLS } from '../../../config';

export const fetchAudio = async(logId : string) => {
    try {
      console.log(`${URLS.Audio}/logId=${logId}`)
      const response = await fetch(`${URLS.Audio}?logId=${logId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const audioResponse = await response.json(); 
      return audioResponse.url
  
    } catch (e) {
      console.error("error getting audio file: ", e);
    }
  }