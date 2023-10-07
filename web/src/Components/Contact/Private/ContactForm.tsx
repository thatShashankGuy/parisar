import './ContactForm.css'
import { useState } from 'react'
import { IContactForm, IFormData } from '../../../Services/InterfaceService'

export default function ContacForm(props: IContactForm){
  let formDataObj : IFormData = {
    query : "",
    name : "",
    location  : "",
    email :"",
    phoneNumber :"",
  }
  const [formData, setFormData] = useState(formDataObj)

    const handleFormInputChange =(e :React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setFormData({
          ...formData,
          [name] : value
        })
    }
    const handleFormTextChange =(e :React.ChangeEvent<HTMLTextAreaElement>)=>{
      const {name,value} = e.target
      setFormData({
        ...formData,
        [name] : value
      })
  }

    function onSubmit(e :React.MouseEvent<HTMLButtonElement, MouseEvent>){
      e.preventDefault();
      props.handleSubmissionFromParent(formData);
    }
    return(
        <>
        <form >
        <div className="form-group">
        <label>Please Provide  Query*</label>
        <textarea
        id="query"
        name="query"
        rows={5}
        value = {formData.query}
        required
        onChange={handleFormTextChange}
        >

        </textarea>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <label>City/Area*</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            required
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleFormInputChange}
            title="Please include the area code in your phone number."
          />
        </div>
        <button type="submit" onClick={(e)=>onSubmit(e)}>Submit</button>
      </form>
        </>
    )
}