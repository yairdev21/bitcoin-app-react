
import React from 'react'

import './TransferFund.css'

const TransferFund = (props) => {
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

export default TransferFund

