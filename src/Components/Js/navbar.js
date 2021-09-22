import React,{useState} from 'react'
import mail from '../Images/mail.png'
import '../Css/home.css'
import {Link}from 'react-router-dom'
import * as Ico from 'react-icons/ai';
function Navbar() {
    const [sidebar,setSidebar]=useState(false);
    const openmenu=()=>setSidebar(!sidebar);
    return (
        <>
        <span className="menu">
            <Link href="#">
            <img src={mail} width="48px" height="40px" margin-top="70px" top="20px" id="mail" alt="img"  onClick={openmenu}/>   
            </Link>
        </span>
        <nav className= {sidebar ? "navmenu active":" navmenu "}>
        <ul className='menu-items' onClick={openmenu}>
            <li className='toggle'>
                <Link to="#" className='menubars' >
                    <Ico.AiOutlineClose/>
               </Link>
            </li>
            </ul>
         </nav>

         {/* work going on */}
         <div className= {sidebar ? "navmenu shadow":" navi "}/>
        </>
    )
}

export default Navbar
