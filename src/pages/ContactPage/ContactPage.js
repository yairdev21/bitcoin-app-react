import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';



import ContactList from '../../cmps/ContactList'
import ContactFilter from '../../cmps/ContactFilter'

import './ContactPage.scss'


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
        this.contactStore.fetchContacts({ term: value.toLocaleLowerCase() });
        this.nameFilter = value;
    };

    render() {
        const { contacts } = this.contactStore
        return (
            contacts && <section className="contactPage">
                <ContactFilter
                    value={this.nameFilter}
                    onFilterNameChange={this.handleNameChange} />
                <ContactList contacts={contacts} />
                <Link className="addContactButton" to="/contact/edit"> <FontAwesomeIcon size="3x" icon="plus-circle"/></Link>
            </section>
        )

    }
}

export default ContactPage

