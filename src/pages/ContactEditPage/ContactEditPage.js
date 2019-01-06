import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactService from '../../services/ContactService.js'

import './ContactEditPage.scss'

class ContactEditPage extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {

        const contact = this.props.match.params.id ?
            await ContactService.getContactById(this.props.match.params.id) :
            {
                name: '',
                email: '',
                phone: ''
            }
        this.setState({ contact })

    }
    remove = async () => {
        await ContactService.deleteContact(this.state.contact._id);
        const { history } = this.props;
        history.push('/contact');
    }

    handleChange = e => {
        const key = e.target.name
        this.setState({ contact: { ...this.state.contact, [key]: e.target.value } });
    };

    handleSubmit = async e => {
        e.preventDefault();
        await ContactService.saveContact(this.state.contact);
        const { history } = this.props;
        if (this.props.match.params.id) history.push(`/contact/${this.props.match.params.id}`);
        else if (!this.props.match.params.id) history.push('/contact/');
    };
    goBack = () => {
        const { history } = this.props;
        history.goBack();
    }


    render() {

        const { contact } = this.state
        return (
            contact &&
            <section className="contactEditPage">
                <div className="buttons-container">
                    <div className="button" onClick={this.goBack}>
                        <FontAwesomeIcon size="lg" icon="arrow-circle-left" />
                    </div>
                    {(contact._id && < div className="button" onClick={this.remove}>
                        <FontAwesomeIcon size="lg" icon="trash-alt" />
                    </div>)}
                </div>
                {(contact._id && <h1>Edit Contact</h1>)}
                {(!contact._id && <h1>Add Contact</h1>)}
                <h1>
                    {(contact._id && <img src={`https://api.adorable.io/avatars/120/${contact._id}.png`} alt="" />)}
                </h1>
                <form className="formContainer" onSubmit={this.handleSubmit}>
                    <h3>
                        Name:&nbsp;<input type="text" name="name" value={contact.name} onChange={this.handleChange} />
                    </h3>
                    <h3>
                        Email:&nbsp;<input type="text" name="email" value={contact.email} onChange={this.handleChange} />
                    </h3>
                    <h3>
                        Phone:&nbsp;<input type="text" name="phone" value={contact.phone} onChange={this.handleChange} />
                    </h3>
                    <button className="save-button">Save</button>
                </form>

            </section>
        )

    }
}

export default ContactEditPage