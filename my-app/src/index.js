import React from 'react';
import ReactDOM from 'react-dom';

function hello(){
    return "Hello World";
}
let username = "zoom"
let user = {name:"zoommo",email:"adobebeta1997@gmail.com"}
const element = <h1>{hello()} {user.name + " " + user.email}</h1>

ReactDOM.render( element, document.getElementById('root'));

