import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import BitcoinService from '../../services/BitcoinService.js'
import MovesList from '../../cmps/MovesList'
import { observable } from 'mobx';

import './HomePage.scss'

@inject('store')
@observer
class HomePage extends Component {

    @observable
    user = this.props.store.userStore.user

    @observable
    BTC = null

    async componentDidMount() {
        this.BTC = await BitcoinService.getBTC(this.props.store.userStore.user.coinCount);
    }
    render() {
        const lastMoves = this.user.moves.filter((move, idx, moves) => { return idx > (moves.length - 4) }).reverse()
        return (
            this.user && <section className="homePage">
                <h1>Hello {this.user.name}!</h1>
                <h4>Coins: {this.user.coinCount}</h4>
                <h4>BTC: {this.BTC} </h4>
                <MovesList title={"Your Last 3 Moves"} movesList={lastMoves} />
               

            </section>
        )

    }
}

export default HomePage