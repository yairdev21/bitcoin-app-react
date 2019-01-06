import React from 'react';
import { Link } from 'react-router-dom';

import './ContactPreview.scss'



const ContactPreview = ({ contact }) => {
  return (
    contact &&
    <li className="contact">
      <Link to={`/contact/${contact._id}`}>
        <div className="contactPreview">
          <img src={`https://api.adorable.io/avatars/110/${contact._id}.png`} alt="" />
          <h2>{contact.name}</h2>
        </div>
      </Link>
    </li>
  )
}


export default ContactPreview