import React, { useState } from "react";
import BaseApp from "../componts/baseapp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

function Edituser({user,setuser}){
    const history=useHistory();
    const {id}=useParams();
    console.log(id)
    const selectuser= user.find((per,indx)=>per.id === id);
    console.log(selectuser);
    
    const[idx,setidx]=useState();
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[batch,setbatch]=useState();
    const[exprience,setexprience]=useState();

    useEffect(()=>{
        setidx(selectuser.id);
        setname(selectuser.name);
        setemail(selectuser.email);
        setbatch(selectuser.batch);
        setexprience(selectuser.exprience);

    },[])

    const updateuser=()=>{
        const editindex= user.findIndex(per=>per.id === id)
        const editdata ={
            id:idx,
            name,
            email,
            batch,
            exprience
        }
        user[editindex]=editdata;
        
        setuser([...user])
        console.log(user)
        history.push("/")
  console.log(editdata);
    }



    return(
        <BaseApp
        title="Create User">
    <div>
  
    <button 
    className="Adduser"
    onClick={()=>history.push("/")}
    >Dashbord</button>
      
          <input
           placeholder="id"
           value={idx}
           onChange={(event)=>setidx(event.target.value)}
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
          <button onClick={updateuser} >Edituser</button>
      
    </div>
    </BaseApp>
    )
}

export default Edituser;