import React from 'react';
// import './RobotFilter.scss';

export default props => {
  return (
    <div className="filters">
      <div>
        <label>
          <input
            style={{ float: 'left', fontSize: '20px' }}
            type="text"
            value={props.value||''}
            onChange={props.onFilterNameChange}
          />
        </label>
      </div>
    </div>
  );
};