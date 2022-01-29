import React from "react";
import Post from "./post";


let e = React.createElement;

export default class SignInFeed extends React.Component {
    render() {
        return e('div',
            {class: 'container'},
            e(Post, {}, null),
          
        );
    }
}