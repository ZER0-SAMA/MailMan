import React ,{useState} from 'react'
import { GoogleLogout } from 'react-google-login';
import "../Css/Dashboard.css"
import add from "../Images/add.png"
import settings from "../Images/settings.png"
import user from "../Images/user.png"
import history from "../Images/history.png"
import edit from "../Images/edit.png"
import check from "../Images/check.png"
import checkone from "../Images/checkone.png"
import Mail from "./MailLayout.js"
function Dashboard() {
    const [visible,setVisible]=useState(false)
    const logout=(response)=>{
        window.location.replace("http://localhost:3000/")
}

    const make=()=>{
     setVisible(!visible)
     console.log(visible)
     if(!visible){
         document.getElementsByClassName('mailing').style.color="red"
     }
    }
    return (
        <div className ="main">
            <div className="detail-header">
                <div id="nameandprof">
              <h1>Name</h1>
                <span id="prof">Proffesion</span>       
                </div>
                <div id="options">                 
                        <span id="option-icons" onClick={logout}><img src={user} height="30px" width="30px"/></span>
                        <span id="option-icons"><img src={history} height="30px" width="30px"/></span>
                        <span id="option-icons" onClick={make}><img src={add} height="30px" width="30px"/></span>
                        <span id="option-icons"><img src={settings} height="30px" width="30px"/></span>

                </div>

            </div>
            <div className="mailing">
                hey
            <Mail/>
            </div>
            <div className="list">
                <div id="subscribed">
                    <h1 id="listheading">subscribed List</h1>
                    <div id="list-container">
                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>

                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>

                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>

                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>

                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>

                <span id="listitem">
                    <span id="bullet">O</span>
                    <h2>nickopai@gmail.com</h2>
                    <span id="tick"><img src={check} height="30px" id="check" width="30px"/>
                    <img src={checkone} height="30px" width="30px" id="checkone"/>
                    </span>

                    <span id="editi"><img src={edit} height="30px" width="30px"/></span>
                </span>
               
                </div>
                
                </div>
                <div id="new-list">
                <h1 id="listheading">New List</h1>
                <div id="list-container">
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                <span id="listitem">List1</span>
                </div>

                </div>
            </div>
            

         


         




















         {/* <div>
                <p id="demo">Logged in</p>
                <button  className="btn" type="submit"   >Log out</button>
                </div> */}
        </div>
    )
}

export default Dashboard














































    // const id =  props.nameid.match.params.nameid;

            {/* <p>{props.}</p> */}
            {/* {id} */}
            {/* <h1>{name}</h1> */}
            {/* <GoogleLogout
        clientId="613050594433-jq3npl7jhm05tsmo4qk8eovd88cc0gc8.apps.googleusercontent.com"
          buttonText="Logout"
        onLogoutSuccess={logout}
         ux_mode='redirect'
        redirectUri={"/"}
         isSignedIn={false}/> */}