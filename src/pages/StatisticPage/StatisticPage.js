import React, { Component } from 'react';

import BitcoinService from '../../services/BitcoinService.js'
import Chart from '../../cmps/Chart'


class StatisticPage extends Component {

    state = {
        marketPrice: null,
    }

    async componentDidMount() {
        const marketPrice = await BitcoinService.getMarketPrice();
        const confirmedTransactions = await BitcoinService.getConfirmedTransactions();
        this.setState({ marketPrice, confirmedTransactions })
    }

    render() {

        const { marketPrice, confirmedTransactions } = this.state
        return (
            marketPrice && <section className="home-page">
                <Chart currChart={marketPrice} />
                <hr />
                <Chart currChart={confirmedTransactions} />
            </section>
        )

    }
}

export default StatisticPage

