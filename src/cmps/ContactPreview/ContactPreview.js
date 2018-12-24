import React from 'react';
import { Link } from 'react-router-dom';

// import '../assets/HomePage.css'



const ContactPreview = ({contact})=> {
        return (
            contact && 
            <li  className="contact-preview">
                  <h3>
                  <img src={`https://robohash.org/${contact._id}.png`} alt=""/>
                    <span>{contact.name}</span>
                  </h3>
                  <Link to={`/contact/${contact._id}`}>Details</Link>
            </li>
        )
}


export default  ContactPreview