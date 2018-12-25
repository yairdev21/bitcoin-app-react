import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Button } from 'react-bootstrap';

import MovesList from '../../cmps/MovesList'
import TransferFund from '../../cmps/TransferFund'

import ContactService from '../../services/ContactService.js'
import UserService from '../../services/UserService.js'

import './ContactDetailsPage.scss'

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
        if (!this.contact) return <div>Loading</div>
        const { user } = this.props.store.userStore
        const contactMoves = user.moves.filter(move => { return move.toId === this.contact._id })
        return (
            this.contact &&
            <section className="contactDetailsPage">
                <div className="buttons-container">
                    <button className="button button5" onClick={this.goBack}>Back</button>
                    <Link className="button button1" to={`/contact/edit/${this.contact._id}`}>Edit</Link>
                </div>
                <div>
                    <img src={`https://api.adorable.io/avatars/120/${this.contact._id}.png`} alt="" />
                </div>
                <h3>  {this.contact.name} </h3>
                <li> <b>Phone:</b> {this.contact.phone} </li>
                <li> <b>Email:</b> {this.contact.email} </li>
                <TransferFund contact={this.contact} maxCoins={user.coinCount} onTransferCoins={this.handleTransferCoins} />
                <MovesList title={"Your Moves"} movesList={contactMoves} />
            </section>
        )

    }
}

export default ContactDetailsPage

