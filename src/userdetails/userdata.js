import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Userdata ({user}){
    const history=useHistory()
const {id}=useParams();
const per=user[id];
    return (

    <div>
        <button 
  className="dash"
  onClick={()=>history.push("/")}
  >Dashbord</button>
        <button 
  className="Adduser"
  onClick={()=>history.push("/newuser")}
  >Adduser</button>
    <h1>student details</h1>
    <h2>{per.name}</h2>
    <p>{per.email}</p>
    <p>Batch:{per.batch}</p>
    </div>
    )
}

export default Userdata;