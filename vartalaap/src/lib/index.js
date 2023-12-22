import { URLS } from './config';

export const fetchAudio = async(logId) => {
    try {
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
export const  fetchEpList = async () => {
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

    if(data){
      return data
    }else{
        return []
    }
}


export const submitFeedBack = async (email,comment) => {
      const response = await fetch(URLS.Feedback,{
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
        },
        body:JSON.stringify({
          email : email,
          comment : comment,
          source : "vartalaap feedback"
        })
      })

     if(!response.ok){
      console.error(response)
      return false
     }else{
      return true 
     }

};
