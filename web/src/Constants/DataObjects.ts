import { blogLinksType,careerEventsType } from "./Types";

export const blogLinks : blogLinksType[]= [{
    key : 1,
    name : "The Typescript Guide", 
    address : "https://github.com/thatShashankGuy/_InSights/wiki/The-TypeScript-Guide"
  },
  {
    key : 2,
    name :"The Go Programming Guide",
    address:"https://github.com/thatShashankGuy/_InSights/wiki/The-Go-Programming-Guide"
  }]

export  const careerEvents  : careerEventsType[]= [
    {
      title: 'Senior Software Engineer @Winjit',
      date: 'Sept 2022 - Present',
      description: 'E2E Developing and Designing and Deployment Cloud Native Full stack applications. Performing Code Review and mentoring junior developers ',
    },
    {
        title: 'Software Engineer @Winjit',
        date: 'Jun 2021 - Sept 2022',
        description: 'Designed and Developed Full stack Applcations . Build CI CD Pipeline and Produce many Cloud native (AWS) applicaiton for Product Teams across Organization',
      },
    {
      title: 'Software Engineer Senior Associate @NTT Data',
      date: 'Oct 2018 - Jun 2021',
      description: 'Build and deployed many production grade app for large scale enterprises for both On premise and Cloud Environments',
    },
    {
      title: 'Business Intelligence Associate (freelance) @CherishTrip',
      date: 'June 2018 - Oct 2018',
      description: 'Cleaning analysing and visualizing sales related data',
    },
  ];

export const AboutMe = {
    heading : "A bit about me ",
    P1 : `In my 6 years of career in IT ,I have been fortunate enough to wear many hats and take on various roles and projects. Currently working with Winjit Technologies as a Senior Software engineer (Products) .
    Working in various tech spaces including web application, network applications, Cloud Automation DevOps, RPA automation, production support, business intelligent etc. gave me a wide perspective and appreciation
    for various business and technological solutions we provide for them.`,
    P2 : `I have a bechelors degree in Electronic and Communications Engineering which have provided me with skill of deep analysis,problem solving and thinking out of the box.`,
    P3 : `My keen interest in computer science goes beyond my day job and i like fiddling around new paradigms , languages and abstract concepts which fills most of my unstructured git repositories.`,
    P4 : `I am an avid reader and prefer hardcopies over ebooks. I love gaming and between that and my job i spend most of time staring at different screens`
}

export const landing = {
    message : "Hello and Welcome. I am Shashank and I appreciate you visitng my website.Please scroll down to know more about me"
}