import React, { Component } from 'react';

// import '../assets/HomePage.css'
import { Sparklines, SparklinesLine } from 'react-sparklines';




export default class Chart extends Component {
    render() {
        const { currChart } = this.props
        return (
            <section className="chart">
                <h1>{currChart.name}</h1>
                    <Sparklines data={currChart.values.map(value=> value.y)}  >
                        <SparklinesLine color="blue" />
                    </Sparklines>
                <h4>{currChart.description}</h4>
            </section>
        )

    }
}

