import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

// import MovesList from '../../cmps/MovesList'
import TransferFund from '../../cmps/TransferFund'

import ContactService from '../../services/ContactService.js'
import UserService from '../../services/UserService.js'

@inject('store')
@observer
class ContactDetailsPage extends Component {

    @observable
    contact = null

    async componentDidMount() {
        this.contact = await ContactService.getContactById(this.props.match.params.id);
    }

    handleTransferCoins = amount => {
        console.log('onTransferCoins:', amount);
        UserService.addMove(this.contact, amount)
        this.props.store.userStore.fetchUser()
    }

    goBack = () => {
        const { history } = this.props;
        history.push('/contact');
    }

    render() {
        const contact = this.contact
        const { user } =  this.props.store.userStore
        return (
            contact &&
            <section className="contact-details">
                <button onClick={this.goBack}>Back</button>
                <div>
                    <img src={`https://robohash.org/${contact._id}.png`} alt="" />
                </div>
                <h1>
                    Name: {contact.name}
                </h1>
                <h2>
                    Email:    {contact.email}
                </h2>
                <h2>
                    Phone:    {contact.phone}
                </h2>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                {/* <MovesList title={contact} moves-list={user.coinCount}  /> */}
                <TransferFund contact={contact} maxCoins={user.coinCount} onTransferCoins={this.handleTransferCoins} />


            </section>
        )

    }
}

export default ContactDetailsPage

