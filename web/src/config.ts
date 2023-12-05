import { env } from "./env"

type URL = {
    Audio :string,
    Resume :string 
}
let URLS : URL
if(env == 'DEV'){
     URLS = {
          Audio: "http://localhost:3000/portfolio/audiolog",
          Resume: "http://localhost:3000/portfolio/resume"
        }
}else{
    URLS = {
        Audio: "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/portfolio/audiolog",
        Resume: "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/portfolio/resume",
      }
}

export {URLS} 
  

