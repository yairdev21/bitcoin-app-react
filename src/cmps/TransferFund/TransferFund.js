
import React from 'react'

import './TransferFund.css'

const TransferFund = (props) => {
    var amount
    return (
        <div className="MovesList">
            <form onSubmit={e => {
                e.preventDefault()
                props.onTransferCoins(amount)
            }} >
                <span>Transfer Fund:</span>
                <label>
                    <input
                        type="number"
                        min="0"
                        max={props.maxCoins}
                        value={props.value}
                        onChange={e => amount = e.target.value}
                        placeholder="numbers only"
                    />
                </label>
                <button>Transfer</button>
            </form>
        </div>
    );
}

export default TransferFund

