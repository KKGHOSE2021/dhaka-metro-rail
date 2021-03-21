import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/"}};
    const [user, setUser] = useState({               
        email:'',
        password:'',
        error:''    
    })

    const handleBlur = (e)=>{ 
        const loginInfo = {...user};
        loginInfo[e.target.name] = e.target.value;
        setUser(loginInfo);   
    }

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        }
    const handleSubmit = (e)=> {
        if (user.email && user.password){
            console.log(user.email, user.password);
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((userCredential) => {
            const user = userCredential.user;
            const userInfo = {...user};
            userInfo.error = '';
            userInfo.success = true;
            setUser(userInfo);
            const {displayName, email} = user;
            const signedInUser = {name:displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);            
        })
        .catch((error) => {
            const userInfo = {...user};
            userInfo.error = error.message;
            userInfo.success = false;
            setUser(userInfo);
        });
        }
        e.preventDefault();
        
    }    
     
    const handleGoogleSignIn = () => {  
        const provider = new firebase.auth.GoogleAuthProvider();        
        firebase.auth().signInWithPopup(provider).then((result) => { 
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);

            }).catch((error) => {    
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
  });
        

    }
    return (
        <div className="text-dark text-center">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Email</label>
            <input type="text" name="email" onBlur={handleBlur} placeholder="Your email"/>
            <label>Password</label>
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password"/>                
            <input type="submit" value="Login"/>
            <br/>
            <p>Don't have an account? <Link to="/createAccount">Create an account</Link></p>            
        </form>
        <button className="signInBtn" onClick={handleGoogleSignIn}> <FontAwesomeIcon className="float-left" icon={faGoogle}/> Continue with Google </button>
         
        </div>
    );
};

export default Login;