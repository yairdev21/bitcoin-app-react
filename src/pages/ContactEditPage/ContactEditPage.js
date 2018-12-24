import React, { Component } from 'react';

import ContactService from '../../services/ContactService.js'

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
        history.push('/contact');
    };
    goBack = () => {
        const { history } = this.props;
        history.goBack();
    }


    render() {

        const { contact } = this.state
        return (
            contact &&
            <section className="contact-edit">
                <h1>
                    {(contact._id && <img src={`https://robohash.org/${contact._id}.png`} alt="" />)}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>
                        Name:<input type="text" name="name" value={contact.name} onChange={this.handleChange} />
                    </h2>
                    <h2>
                        Email:<input type="text" name="email" value={contact.email} onChange={this.handleChange} />
                    </h2>
                    <h2>
                        Phone:<input type="text" name="phone" value={contact.phone} onChange={this.handleChange} />
                    </h2>
                    <button>Save</button>
                </form>
                <button onClick={this.remove}>Delete</button>
                ............
                <button onClick={this.goBack}>Back</button>

            </section>
        )

    }
}

export default ContactEditPage