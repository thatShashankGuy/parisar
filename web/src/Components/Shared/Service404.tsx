
type Service404Props = {
    component : string
}


const Service404 : React.FC<Service404Props> = ({component}) =>{

    return (
        <>
        {component == "feedback" ? 
        <h1>Sorry! This service is not available at this moment. <a href="mailto:shashankforworkshekhar@gmail.com">You can Email Us Directly</a></h1>
            :<h2>Sorry! This service is not available at this moment</h2>}
        </>
    )
}

export default Service404