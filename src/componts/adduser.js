import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "./baseapp";


function Adduser({user, setuser}){
  const history=useHistory();
   
    const [id, setid]=useState("");
    const [name, setname]=useState("");
    const [batch, setbatch]=useState("");
    const [email, setemail]=useState("");
    const [exprience, setexprience]=useState("");
  

    const adduser =()=>{
        const newuser={
            id,
            name, 
            batch,
            email,
            exprience
        }
        setuser([...user, newuser])
        setid("")
        setemail("")
        setbatch("") 
        setexprience("")
        setname("")
        history.push("/")
    }

    return(
      <BaseApp 
      title="Create User">
  <div>

  <button 
  className="Adduser"
  onClick={()=>history.push("/")}
  >Dashbord</button>
    <from>
        <input
         placeholder="id"
         value={id}
        onChange={(event)=>setid(event.target.value)}
         />
        <input 
        placeholder="name"
        value={name}
        onChange={(event)=>setname(event.target.value)}
        />
        <input 
        placeholder="batch"
        value={batch}
        onChange={(event)=>setbatch(event.target.value)}
        />
        <input  
        placeholder="email"
        value={email}
        onChange={(event)=>setemail(event.target.value)}
        />
        <input
         placeholder="exprience"
        value={exprience}
        onChange={(event)=>setexprience(event.target.value)}
        />
        <button onClick={adduser}>Adduser</button>
    </from>
  </div>
  </BaseApp>
    )
}


export default Adduser;