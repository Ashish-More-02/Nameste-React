import React from "react";
import ReactDOM from "react-dom/client"; 

const Header =()=>{
    return (
        <div id="componentheader">
            <img className="logo" src="https://www.rightscon.org/cms/assets/uploads/2021/05/Apple-logo-small.png" ></img>
            <input type="text" id="textbox"></input>
            <img className="image" src="https://i.pinimg.com/474x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg"></img>
        </div>
    )
}

const headerroot = ReactDOM.createRoot(document.getElementById("header"));

headerroot.render(<Header />);