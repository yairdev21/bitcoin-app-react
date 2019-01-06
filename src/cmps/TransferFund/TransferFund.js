
import React from 'react'

import './TransferFund.scss'

const TransferFund = (props) => {
    var amount
    return (
        <div className="transferFund">
            <form onSubmit={e => {
                e.preventDefault()
                props.onTransferCoins(amount)
            }} >
                <h3>Transfer coins to {props.contact.name}:</h3>
                <div className="inputContainer">
                    <label>
                        <b>Amount:</b>&nbsp;
                        <input
                            type="number"
                            min="0"
                            max={props.maxCoins}
                            value={props.value}
                            onChange={e => amount = e.target.value}
                            placeholder="numbers only"
                        />
                    </label>
                    <button className="button"><b>Transfer</b></button>
                </div>
            </form>
        </div>
    );
}

export default TransferFund

