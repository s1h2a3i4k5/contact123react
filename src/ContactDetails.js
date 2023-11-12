const ContactDetails = (props) =>{
    const {data} = props
    return(
     <div className="items">
        <div className="content d-flex">
            <div>
            <img src={"https://tse1.mm.bing.net/th?id=OIP.PvHOtO_Bvj7M9VXePycyAwHaHa&pid=Api&P=0&h=40"}/>
            </div>
            <div className="mx-2">
            <span className="header">{data.name}</span>
            <p>{data.email}</p>
            </div>
            
            
        </div>
        <span className="icon" style={{color:"red",marginTop:"7px"}}><i class="fa-solid fa-trash-can"></i></span>
        <hr/>
     </div>
     
    )
}
export default ContactDetails;