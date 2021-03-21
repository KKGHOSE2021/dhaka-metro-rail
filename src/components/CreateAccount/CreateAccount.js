import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import './CreateAccount.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const CreateAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/"}};
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
        error:'',
        success: false
    })
    const handleBlur = (e)=>{
        let isFieldValid;
        if (e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); 
            console.log('email', isFieldValid)           
        }
        
        if (e.target.name === 'password'){
            isFieldValid = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value);
            console.log('password', isFieldValid)
        }

        if (isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(user)
        }

    }
    const handleSubmit = (e) => {
        if (user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((userCredential) => {
            var user = userCredential.user;
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true; 
            setUser(newUserInfo);  
        })
        .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
        });
        }
        e.preventDefault();        
    }
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        }      
    const handleGoogleSignIn = () => { 
        const provider = new firebase.auth.GoogleAuthProvider();        
        firebase.auth().signInWithPopup(provider).then((result) => { 
            const user = result.user;
            setUser(user);
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            const {displayName, email} = user;
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
                <h1>Create an account</h1>
                <label>Name</label>
                <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name"/>
                <label>Email</label>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your email"/>
                <label>Password</label>
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password"/>                
                <input type="submit" value="Create an account"/>
                <br/>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p className="text-danger">{user.error}</p>
                {user.success && <p className="text-success">Account created successfully!</p>}               
            </form>
            <button className="signInBtn" onClick={handleGoogleSignIn}> <FontAwesomeIcon className="float-left" icon={faGoogle}/> Continue with Google </button> 
         
        </div>
    );
};

export default CreateAccount;