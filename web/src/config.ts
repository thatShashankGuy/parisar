import { ENV } from "./env"
import { URL } from "./Constants/Types"

const BASEURL = ENV === "PROD" 
  ? "https://210fv34fi9.execute-api.ap-south-1.amazonaws.com/Prod/"
  : "http://localhost:3000/"

export const URLS: URL = {
  Audio: `${BASEURL}portfolio/audiolog`,
  Resume: `${BASEURL}portfolio/resume`
}





