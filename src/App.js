 
import './App.css';
import BaseApp from './componts/baseapp';
import Usercomponets from './componts/usercomponets.js';
import { useState } from 'react';
import { data } from './data/data';
import Adduser from './componts/adduser.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Userdata from './userdetails/userdata.js';
import Edituser from './userdetails/edit.js';
// import Userdata from './userdetails/userdata.js';



function App() {
const [user, setuser]=useState(data)
return (
    <div className="App">

 <Switch>
 
 <Route exact path="/">
     <BaseApp>
     <Usercomponets 
     user={user}
     setuser={setuser}>
    </Usercomponets>
    </BaseApp>
</Route>


<Route path='/newuser'>
    <Adduser user={user}
     setuser={setuser}>
    </Adduser>
</Route>

<Route path='/view/:id'>
  <Userdata user={user}
  setuser={setuser}>
  </Userdata>
</Route>

<Route path='/edit/:id'>
  <Edituser 
  user={user}
  setuser={setuser}
  />
  
</Route>




 </Switch>
 
    
     
   </div>
  );
}

export default App;




