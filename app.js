import React from "react";
import ReactDOM from "react-dom";

const AppComponent = () =>{
    return(
        <div>
            <h1>Welcome to contact App</h1>
            <h2>This testing purpose</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);