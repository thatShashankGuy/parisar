import photographer from '../../assets/photographer.svg'
import '../../Styles/Service404.css'
type Service404Props = {
    component : string
}


const Service404 : React.FC<Service404Props> = ({component}) =>{

    return (
        <>
        {component == "feedback" ? 
        <h1>Sorry! This service is not available at this moment. <a href="mailto:shashankforworkshekhar@gmail.com">You can Email Us Directly</a></h1>
            :
            <div className='service404'>
            <img src={photographer} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }}  />
            <h2>Oops! Seems like you are lost.<a href='/'>Go back to main page</a></h2>
            </div>
            }
        </>
    )
}

export default Service404