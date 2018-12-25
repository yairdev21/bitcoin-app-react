import React from 'react';

import ContactPreview from '../ContactPreview'
import './ContactList.scss'

const ContactList = ({contacts}) => {
    return (
        contacts && <ul className="contactList">
            {
                contacts.map(contact =>
                    <ContactPreview key={contact._id} contact={contact} />
                )
            }
        </ul>
    )
}

export default ContactList
