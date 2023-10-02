import './ContactForm.css'
import { useState } from 'react'
export default function ContacForm(){
    const [query,setQuery]  = useState("0");
    const [name , setName] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [email , setEmail] = useState("")
    const [location, setlocation] = useState("")
    const [apiResponse, setApiResponse]  = useState([])
    const [loading ,setLoading]  = useState(false)

    function onSubmit(e :React.MouseEvent<HTMLButtonElement, MouseEvent>){
      e.preventDefault();
      const url = ""
      setLoading(true)
      fetch(url,).then( (response:Response) =>{
        if(!response.ok){
         throw new Error(`Error occurred : ${response.status}`)
        }
        return response.json();
      }).then(data =>{
        setApiResponse(data)
        setLoading(false);
      }).catch((e:any)=>{
          console.log(e);
          setLoading(false);
      })
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
        required
        onChange={(e) => setQuery(e.target.value)}
        >

        </textarea>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City/Area*</label>
          <input
            type="text"
            name="city"
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            title="Please include the area code in your phone number."
          />
        </div>
        <button type="submit" onClick={(e)=>onSubmit(e)}>Submit</button>
      </form>
        </>
    )
}