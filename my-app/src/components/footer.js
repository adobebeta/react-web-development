import React from 'react'
// import './App.css';

 const Footer = (props ) => {
     const {company, email} = props;
     return (
     <div className ="container-fluid">
     <hr />
        <div className="text-center title text-uppercase">

        <small>
        <span className="text-danger">Powered by {props.company}</span> | <span class="text-muted"> Contect {props.email}</span>
        </small>
        </div>
     </div>
     )
 }

 export default Footer;