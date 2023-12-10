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
    name : string,
    logId : string,
    episodeId : string
}

export type catapultType = {
    engine: Matter.Engine;
    runner: Matter.Runner;
    render: Matter.Render;
    canvas: HTMLCanvasElement;
    destroy: () => void;
}

export type URL = {
    Audio: string,
    Resume: string,
    Feedback : string
  }
