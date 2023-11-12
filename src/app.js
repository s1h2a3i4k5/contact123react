import React, { useState } from "react";
import ReactDOM from "react-dom";
import Headercomponent from "./Components/Header";
import ContactListComponent from "./components/ContactList";
import AddComponent from "./components/AddContact";

const AppComponent = () =>{
    
    const[contacts,updatecontacts] = useState([])

    const addContacthandler = (contact) =>{
        console.log(contact)
        updatecontacts([...contacts,contact])
    }
    return(
        <div className="container"> 
            <Headercomponent/>
            <AddComponent addContacthandler={addContacthandler}/>
           <ContactListComponent contact= {contacts}/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);