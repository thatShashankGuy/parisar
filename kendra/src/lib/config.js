import { ENV } from "./env"


let BASEURL =  "http://127.0.0.1:3000/api/v1/"
if( ENV === "PROD"){  
  BASEURL =  "https://qrfdmuap65.execute-api.ap-south-1.amazonaws.com/Prod/api/v1/"
}
   
  

export const URLS = {
  Resume: `${BASEURL}resume`,
  Feedback : `${BASEURL}feedback`,
}

export const ImpRef = {
    nibandh_repo : "https://github.com/thatShashankGuy/nibandh",
    nibandh_pages : "https://thatshashankguy.github.io/nibandh/",
    vartalaap_site : "https://shashankshekhar-micro.pages.dev/",
    parisar_repo : "https://github.com/thatShashankGuy/parisar"
  }


