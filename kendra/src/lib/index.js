import { URLS
 } from "./config";

export const submitFeedBack = async (email,comment) => {
    const response = await fetch(URLS.Feedback,{
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        email : email,
        comment : comment,
        source : "kendra feedback"
      })
    })

   if(!response.ok){
    console.error(response)
    return false
   }else{
    return true 
   }

};


 const requestResumeURL = async () => {  
    try {
      const response = await fetch(URLS.Resume);
      if (!response.ok) {
        throw new Error('Failed to fetch presigned URL');
      }
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const downloadResume = async () => {
    const downloadUrl = await requestResumeURL()
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
}