import React from 'react';

import ContactPreview from '../ContactPreview'
// import '../assets/HomePage.css'

const ContactList = ({contacts}) => {
    return (
        contacts && <ul className="contact-list">
            {
                contacts.map(contact =>
                    <ContactPreview key={contact._id} contact={contact} />
                )
            }
        </ul>
    )
}

export default ContactList
