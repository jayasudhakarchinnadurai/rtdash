import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Usercomponets({user, setuser}){

    const history=useHistory();
    const deleteuser =(idx)=>{
        const alterlist =user.filter((per, id)=>per.id!==idx)
        setuser(alterlist)
   }
    return (
   <div className="usercomponts">
    {user.map((stu, idx)=>{
   return<div key={idx}  className="user-card">
    <h4>Name: {stu.name}</h4>
    <p>Email: {stu.email}</p>
    <p>batch: {stu.batch}</p>
    <p>exprience: {stu.exprience}</p>
    <button onClick={()=>history.push(`/view/${idx}`)} >view</button> 
    <button onClick={()=>history.push(`/edit/${stu.id}`)}>edit</button> 
    <button onClick={()=>deleteuser(stu.id)}>delete</button>
   </div>
    })} 
   </div>
    )
}

export default Usercomponets;


