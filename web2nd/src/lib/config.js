import { ENV } from "./env"


let BASEURL =  "http://127.0.0.1:3000/api/v1/"
if( ENV === "PROD"){  
  BASEURL =  "https://qrfdmuap65.execute-api.ap-south-1.amazonaws.com/Prod/api/v1/"
}
   
  

export const URLS = {
  Audio: `${BASEURL}broadcast`,
  Resume: `${BASEURL}resume`,
  Feedback : `${BASEURL}feedback`,
  Episodelist : `${BASEURL}episodelist`
}





