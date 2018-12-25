import React from 'react';
import { Link } from 'react-router-dom';

import './ContactPreview.scss'



const ContactPreview = ({contact})=> {
        return (
            contact && 
            <li  className="contactPreview">
                  <img src={`https://api.adorable.io/avatars/110/${contact._id}.png`} alt=""/>
                    <h2>{contact.name}</h2>
                  <Link className="button button1" to={`/contact/${contact._id}`}>Details</Link>
            </li>
        )
}


export default ContactPreview