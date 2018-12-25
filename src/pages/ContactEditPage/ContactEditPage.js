import React, { Component } from 'react';

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
        history.push(`/contact/${this.props.match.params.id}`);
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
                <button className="button button5" onClick={this.goBack}>Back</button>
                {(contact._id && < button className="button button3" onClick={this.remove}>Delete</button>)}
               </div>
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
                    <button className="button button1">Save</button>
                </form>
 
            </section>
        )

    }
}

export default ContactEditPage