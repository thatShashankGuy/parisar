import { useEffect, useState } from 'react'
import success from  '../../assets/welcome.svg'
import './Landing.css'
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Landing = () => {
    const fullWelcomeMessage = "Hello and welcome! I'm Shashank, and I'm thrilled to have you here."
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
        <h2>{welcomeMessage}<span><FontAwesomeIcon icon={faMeteor} /></span></h2>
        </div>
        </div>
        </>
    ) 
}


export default Landing
