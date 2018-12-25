import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';



import ContactList from '../../cmps/ContactList'
import ContactFilter from '../../cmps/ContactFilter'

// import '../assets/HomePage.css'


@inject('store')
@observer
class ContactPage extends Component {
    contactStore = this.props.store.contactStore

    @observable
    nameFilter = ''

    async componentDidMount() {
        this.contactStore.fetchContacts()
    }

    handleNameChange = async e => {
        const { value } = e.target;
        this.contactStore.fetchContacts({ term: value });
        this.nameFilter = value;
    };

    render() {
        const { contacts } = this.contactStore
        return (
            contacts && <section className="contact-page">
                <Link to="/contact/edit">Add Contact</Link>
                <ContactFilter
                    value={this.nameFilter}
                    onFilterNameChange={this.handleNameChange} />
                <ContactList contacts={contacts} />
            </section>
        )

    }
}

export default ContactPage

