import success from  '../../assets/success.svg'
import './Landing.css'


const Landing = () => {
    const message1 = "Hello There!!"
    return(
        <>
        <div className='landing-container'>
        <div className='success'>
        <img src={success} alt={"Image not Found"} />
        </div>
        <div className='message'>
        <h1>{message1}</h1>
        </div>
        </div>
        </>
    ) 
}


export default Landing
