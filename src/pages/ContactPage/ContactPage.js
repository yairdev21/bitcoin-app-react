import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactList from '../../cmps/ContactList'
import ContactFilter from '../../cmps/ContactFilter'

import ContactService from '../../services/ContactService'
// import '../assets/HomePage.css'



class ContactPage extends Component {

    state = {
        contacts: null,
        nameFilter: null
    }

    async componentDidMount() {
        const contacts = await ContactService.getContacts();
        this.setState({ contacts })

    }

    handleNameChange = async e => {
        const { value } = e.target;
        const contacts = await ContactService.getContacts({ term: value });
        this.setState({ contacts, nameFilter: value });
    };

    render() {
        const { contacts } = this.state
        return (
            contacts && <section className="contact-page">
                <Link to="/contact/edit">Add Contact</Link>
                <ContactFilter
                    value={this.state.nameFilter}
                    onFilterNameChange={this.handleNameChange} />
                <ContactList contacts={contacts} />
            </section>
        )

    }
}

export default  ContactPage

