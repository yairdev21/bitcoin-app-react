import React from 'react';
import './MovesList.scss';

export default ({ movesList, title }) => {
  return (
    movesList && <div className="movesList">
      <h1>{title}</h1>
      <ul className="contact-list">
        {
          movesList.map(move =>
            <li key={move.at}>
              <div><b>To:</b> {move.to}</div>
              <div><b>At:</b> {JSON.stringify(new Date(move.at))}</div>
              <div><b>Amount:</b> {move.amount}</div>
            </li>
          )
        }
      </ul>
    </div>
  );
};
