import React from "react";
import SignInButton from "./sign-in-button";

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
            <div className="card-header bg-success text-white">
                Username and Passwor
            </div>
            <div className="card-body">
                comment content
            </div>
            <div className="card-footer">
                <SignInButton />
            </div>
            </div>
            
        );
    }
}