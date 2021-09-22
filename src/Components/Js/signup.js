import React,{useState} from 'react'
import '../Css/signup.css'
import {Link}from 'react-router-dom'
import Gmail from '../Images/Gmail-logo.png'
import GoogleLogin from 'react-google-login';
import Dash from './Dashboard';
export default function Login() {
    const [sign,setSign] =useState(false)
    const[name,setName]=useState("")
    const rendera=()=>setSign(!sign);
    const responseGoogle = (response) => {
        console.log(response)
        setName(response.profileObj.givenName+response.profileObj.familyName)
        // setName(prop);
      }

    return (
        <>
        {/* <h1>{name}</h1> */}
            <form className="signup">

                <div className="signbox">
                    <h1 id="head">Sign up</h1>
                <div >
                    <input type="text" className="input" placeholder="Username"/>
                </div>
                <div >
                 <input type="text" className="input" placeholder="Email"/>
                </div>
                <div >
                    <input type="text" className="input" placeholder="Password"/>
                </div>
                <div>
                <Link to={`/Dash/${name}`}>
                    <button  className="btn" onClick={rendera}>
                        Sign up
                        </button>
                </Link>
                </div>
               
                <div className="options">
                <p>Do you already have account ? <a href="/Login" style={{textDecoration: 'none',color:'white' }}  >Login</a></p>
                    <span id="extratext">Other options:</span>
                    {/* <img src={Gmail} className="logo" onClick={rendera} style={{cursor:'pointer'}}/> */}
                   {/* {sign? */}
                    <GoogleLogin
    clientId="613050594433-jq3npl7jhm05tsmo4qk8eovd88cc0gc8.apps.googleusercontent.com"
    render={renderProps => (
        <img src={Gmail} className="logo"  onClick={renderProps.onClick} disabled={renderProps.disabled} style={{cursor:'pointer'}}/>
    //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
  {sign?`${sign}`:`Wrong credentials ${sign}`}
  {/* :  */}

  {/* <GoogleLogout
  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  buttonText="Logout"
  onLogoutSuccess={logout}
>
</GoogleLogout>} */}
                </div>
                </div>
            </form>
           
        </>
    )
}
