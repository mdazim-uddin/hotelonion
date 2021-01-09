import React, {useContext, useState } from 'react';
import firebase from "firebase/app";
import {UserContext} from '../../App'
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
const [loggedInUser,setLoggedInUser]= useContext(UserContext)
const history = useHistory()
const location = useLocation()
const { from } = location.state || { from: { pathname: "/" } };
if  (firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
    }

    const googleprovider = new firebase.auth.GoogleAuthProvider();
    // const provider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
      firebase.auth().signInWithPopup(googleprovider).then(function(result) {
      const {displayName, email} = result.user;
      const googleLogginUser = {name : displayName,email}
      setLoggedInUser(googleLogginUser)
      history.replace(from)
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
return (
        <div className="sign-up-from">
            <h1>Sign Up Now</h1>
            <form>
            <input type="text" className="input-box" placeholder="Your Name" required />
                <input type="email" className="input-box" placeholder="Your Email" required />
                <input type="password"
                className="input-box"  name="password"  placeholder="Password" required />
                <p><span><input type="checkbox"/></span> I agree to the terms of service</p>
                <button type="button" className="signup-btn">Sign Up</button>
                <hr></hr>
                <p className="or">OR</p>
                <button type="button" onClick={handleGoogleSignIn} className="google-btn">Login With Google
                
                </button>
                <p>Do you have account ? <a href="#">Sign in</a></p>
            </form>
        </div>
    );
};

export default Login;