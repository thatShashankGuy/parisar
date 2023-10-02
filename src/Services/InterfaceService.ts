export interface IResponse{
    error : boolean 
    data : any
  }


export interface IContactForm{
  handleSubmissionFromParent : any  
}

export interface IFormData{
  query : string 
  name : string
  location : string
  email : string
  phoneNumber : string
}