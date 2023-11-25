import { env } from "./env"

type URL = {
    Audio :string,
    Resume :string 
}
let URLS : URL
if(env == 'DEV'){
     URLS = {
          Audio: "http://localhost:3000/audiolog",
          Resume: "http://localhost:3000/resume"
        }
}else{
    URLS = {
        Audio: "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/audiolog",
        Resume: "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/resume",
      }
}

export {URLS} 
  

