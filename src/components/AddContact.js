// const AddComponent = () =>{
//     return(
//         <div>
//             <h2>Add Contact</h2>
//             <form action="" method="">
//               <div className="react-form">
//               <label for="name" class="form-label">Name:</label>
//              <input type="email" class="form-control" id="name" required></input>
//               </div>
//               <div className="react-form">
//               <label for="name" class="form-label">Email:</label>
//              <input type="email" class="form-control" id="email" required></input>
//               </div>
//               <button className="btn btn-primary mt-2">Add</button>
//               <hr/>
//             </form>
//         </div>
//     )
// }
// export default AddComponent;
import React from "react";
class AddComponent extends React.Component {
    state = {
        name:"",
        email:"",
    }; 
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === " " || this.state.email === "")
        {
            alert("All fields are mandatory")
            return
        }
        console.log(this.state);
        this.props.addContacthandler(this.state)
        this.setState({name:"",email:""});
    }
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form action="" method="" onSubmit={this.add}>
                    <div className="react-form">
                        <label for="name" class="form-label">Name:</label>
                        <input type="type" class="form-control" id="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="react-form">
                        <label for="name" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />
                    </div>
                    <button className="btn btn-primary mt-2">Add</button>
                    <hr />
                </form>
            </div>
        );
    }

}
export default AddComponent;