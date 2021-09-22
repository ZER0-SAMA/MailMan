import React,{useState,useEffect} from 'react'
import '../Css/login.css'
import {Link}from 'react-router-dom'
import Dash from './Dashboard'
export default function Login() {
    // const fun=()=>{
    //     return}
    const [log,setLog]=useState(true)
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth]=useState([{username:"",password:""}])
    const valid=  (e)=>{
           e.preventDefault()
          
          if(name==='Admin'&&password==='Admin'){
            setAuth([...auth,{username:name,password:password}]) 
            setLog(false)
            window.location.replace("/Dash")
            console.log("Login Successful")
            // setTimeout(()=>{
            //     message("Login Successful")

            // },1000)
            var w = window.open('','','width=100,height=100')
            w.document.write(`Login Successful ${name}`)
            w.focus()
            setTimeout(function() {w.close();}, 1000)
          
          }
          else{
            
            console.log("Wrong Credentials")
            alert("Wrong Credentials")
          }
            setName("")
            setPassword("")
    }
        useEffect(()=>{
            console.log(auth)
        },[auth])
    const Namme=(e)=>{ setName(e.target.value)                     
    }
    const passe=(e)=>{setPassword(e.target.value)                 
    }

    return (
        <>
        
            <form className="login" >
                {/* <label>Login</label> */}
                <div className="Loginbox">
                    <h1 id="head">Login</h1>
                <div >
                    <input type="text"  value={name} onChange={Namme} className="input" placeholder="Username"/>
                </div>
                <div >
                    <input type="text"  value={password} onChange={passe}className="input" placeholder="Password"/>
                </div>
                <div>
                
    
                <Link to="#">
                
                <button  className="btn" type="submit"  onClick={valid} >Login</button>
                </Link>
           
                
                < p>Don't have an account?<a href="/Signup"  style={{textDecoration: 'none',color:'white' }}> Signup</a></p>
                </div>
                </div>
            </form>
                
             
                
            
            
           
        </>
    )
}
