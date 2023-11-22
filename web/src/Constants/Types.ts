export type blogLinksType = {
    key : number,
    name : string,
    address : string,
    hidden? : boolean
}

export type careerEventsType = {
    title : string , 
    date  : string,
    description : string
}

export type Job = {
    title: string;
    date: string;
    description: string;
  }
  
export type CareerTimelineProps = {
    jobs: Job[];
}

export type BlogProps = {
    blogs : blogLinksType[]
}

export type modeProps = {
    darkMode :boolean
}

export type AudioIndexItem ={
    nameText : string
}

  
  

