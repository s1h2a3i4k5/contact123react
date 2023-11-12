import ContactDetails from "../ContactDetails";
const ContactListComponent = (props) =>{
    console.log(props)
    // const contact = [
    //     {
    //         id:"1",
    //         name:"Shaik",
    //         email:"shaik@gmail.com"
    //     },
    //     {
    //         id:"2",
    //         name:"Ahamedunnisa",
    //         email:"ahamedunnisa@gmail.com"
    //     }
    // ]
   const renderContactList = props.contact.map((contact)=>{
    return <ContactDetails data={contact}/>
        
    
   });
    return(
        <div>
             {/* {contact.map((data_contact) =>
            <ContactDetails data = {data_contact}/>
            )} */}
           {renderContactList}
        </div>
    )
}
export default ContactListComponent;