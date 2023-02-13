import React from "react";
import {GoogleButton} from "react-google-button";

const Signin = () =>{
    return (
        <div>   
            <h1 className="Sign-In_Header">Sign In</h1>
            <div className="Google Button">
                <GoogleButton />
            </div>
        </div>
    );
};

export default Signin;