import './ContactForm.css'
export default function ContacForm(){
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
        >

        </textarea>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label>City*</label>
          <input
            type="text"
            name="city"
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </>
    )
}