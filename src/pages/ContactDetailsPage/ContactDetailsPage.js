import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactService from '../../services/ContactService.js'


 class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const contact = await ContactService.getContactById(this.props.match.params.id);
        this.setState({ contact })

    }

    goBack = ()=>{
        const {history} = this.props;
        history.goBack();
    }

    render() {

        const { contact } = this.state
        return (
            contact &&
            <section className="contact-details">
                <h1>
                    <img src={`https://robohash.org/${contact._id}.png`} alt=""/>
                Name: {contact.name}
                </h1>
                <h2>
                Email:    {contact.email}
                </h2>
                <h2>
                Phone:    {contact.phone}
                </h2>
                <button onClick={this.goBack}>Back</button>
               
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>

            </section>
        )

    }
}

export default ContactDetailsPage

