import React, { Component } from 'react';

import UserService from '../../services/UserService.js'
import BitcoinService from '../../services/BitcoinService.js'

class HomePage extends Component {

    state = {
        user: null,
        BTC: null
    }

    async componentDidMount() {
        const user = await UserService.getUser();
        const BTC = await BitcoinService.getBTC(user.coinCount);
        // const BTC = 0.5
        this.setState({ user, BTC })

    }

    render() {

        const { user, BTC } = this.state
        return (
            user && <section className="homepage">
                <h1>Hello {user.name}!</h1>
                <h2>Coins: {user.coinCount}</h2>
                <h2>BTC: {BTC} </h2>
            </section>
        )

    }
}

export default HomePage