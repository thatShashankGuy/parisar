import { ENV } from "./env"


let BASEURL =  "http://127.0.0.1:3000/admin/v1/"
// @ts-ignore
if( ENV === "PROD"){  
  BASEURL =  "https://qrfdmuap65.execute-api.ap-south-1.amazonaws.com/Prod/admin/v1/"
}
   
  

export const URLS = {
  blogMetadata : `${BASEURL}blog-metadata`,
  audioMetadata : `${BASEURL}audio-metadata`,
  feedback : `${BASEURL}feedback`,
  uploadblogMarkdown : `${BASEURL}upload-blogs`
}



