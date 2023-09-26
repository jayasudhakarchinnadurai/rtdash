import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function BaseApp ({title, style,children}){
  const history=useHistory()
 return(
 <div>
   <div className="title">{title}</div>
  <button 
  className="Adduser"
  onClick={()=>history.push("/newuser")}
  >Adduser</button>
   <div>
    <h3>User Details</h3>
   </div>
   
   <div>
    {children}
   </div>

 <div>
<footer className="footer">
    contact us
    <div>Email: sudhakar@gmail.com</div>
    <div>phone:123457</div>
  </footer>
</div>


</div>
    )
}
export default BaseApp;