import { useEffect, useState } from 'react'
import success from  '../../assets/welcome.svg'
import './Landing.css'


const Landing = () => {
    const fullWelcomeMessage = "Hello There!!"
    const [welcomeMessage, setWelcomeMessage] = useState('')
    const [index,setIndex] = useState(0)

    useEffect(()=>{
        if(index < fullWelcomeMessage.length){
            const timer = setTimeout(()=>{
                setWelcomeMessage(prev => prev + fullWelcomeMessage[index])
                setIndex(i=> i + 1  )
            },100)

            return ()=> clearTimeout(timer)
        }
    },[index,fullWelcomeMessage])
    
    return(
        <>
        <div className='landing-container'>
        <div className='success'>
        <img src={success} alt={"Image not Found"} />
        </div>
        <div className='message'>
        <h1>{welcomeMessage}<span>!</span></h1>
        </div>
        </div>
        </>
    ) 
}


export default Landing
