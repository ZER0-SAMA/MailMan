import './App.css';
import Login from './Components/Js/login';
import Home from './Components/Js/home'
import Signup from './Components/Js/signup'
import Dash from './Components/Js/Dashboard'
import NotFound from'./Components/Js/NotFound'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="main">
     <Switch>
    
        <Route exact path="/" component={Home}/>
        <Route   path="/Login" component={Login}/>
        <Route   path="/SignUp" component={Signup}/>
        <Route   path="/Dash" component={Dash}/>
        <Route   component={NotFound}/>
      
       
        {/* <Route exact path="/Dash/:nameid" render={(props)=><Dash nameid={props}/>}/> */}
       
        </Switch>
    </div>
  );
}

export default App;
