import React from 'react';
// import './RobotFilter.scss';

export default props => {
  return (
    <div className="MovesList">
      <div>
        <label>
          <input
            style={{ float: 'left', fontSize: '20px' }}
            type="number"
            value={props.value}
            onChange={props.onTransferCoins}
          />
        </label>
      </div>
    </div>
  );
};
