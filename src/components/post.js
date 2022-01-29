import React from "react";
import SignInButton from "./sign-in-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    render(){
        return(
            
            <div className="card w-75">
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#LoginForm">Login</a>
                </div>
                <div></div>

                <div className="card-header bg-primary text-white">
                    <h3>Log In</h3>
                </div>
                <div className="card-body">
                    <div className='form'>
                    <form>
                    <label>
                        Username and Password
                            <input type="text" name="name" />
                            <input type="text" name="name" />
                            </label>
                             <input type="submit" value="Submit" />
                    </form>
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        )
   
    }
}