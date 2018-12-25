import React from 'react';
import './ContactFilter.scss';

export default props => {
  return (
    <div className="contactFilter">
      <div>
        <label>
          <input
            placeholder="Search Contact"
            type="text"
            value={props.value}
            onChange={props.onFilterNameChange}
          />
        </label>
      </div>
    </div>
  );
};
