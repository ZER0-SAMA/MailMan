import React ,{useState} from 'react'
// import LOGIN from './login'
import '../Css/home.css'
import humans from '../Images/humanns.png'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import ReactPlayer from 'react-player';
export default function Home() {
  
    const goto=e=>{
            e.preventDefault();//Prevent refresh on click
            // alert(`you have searched for -${document.getElementById("input").value}`);
            var element = document.getElementById("service");
            element.scrollIntoView()
            // element.scrollTop=600;
            // element.scrollTop = element.scrollHeight - element.clientHeight;
            document.getElementById("arrow").className="hide"
          };
    const [mute,setMute]=useState(true)
    return (
        <>
        <div className="Main">
            <div id="header">
            <Navbar/>
            <h1 id="heading">MailMan</h1>
                </div>
  
            <p id="loginsign">
                <a href="/login" id="cli">Login</a>
                <div class="vl"></div>
                <a href="/Signup" id="cli">Sign up</a>
            </p>

        <div className="Background">
            <img src={humans}  id="humans"/>
        </div>
        <div id="arrow">
        <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href="#" onClick={goto}></a>
        </div>

        <div id="service">
        <ReactPlayer url="https://www.youtube.com/watch?v=g6CJ8KjRgx4"
        // muted="false"
        playing ="true"
        controls
                    config={{
                        youtube: {
                          playerVars: { autoplay: 1,start:1 }
                        }
                    }
                }
        onPlay={(muted)=>muted}
                     />
        </div>
        </div>
        </>
    )
}
// onClick="toggle('arrow', 'hide')"