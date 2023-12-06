import { ENV } from "./env"
import { URL } from "./Constants/Types"


let BASEURL =  "http://127.0.0.1:3000/api/v1/"
if( ENV === "PROD"){  
  BASEURL =  "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/api/v1"
}
   
  

export const URLS: URL = {
  Audio: `${BASEURL}broadcast`,
  Resume: `${BASEURL}resume`
}





