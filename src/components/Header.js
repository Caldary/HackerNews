import React from 'react';

const Header = (props) =>{
  return (
    <div>
      <select onChange={props.handleSelectFilter}>
        <option key="score" value="score">score</option>
        <option key="title" value="title">title</option>
        <option key="time" value="time">time</option>
      </select>
    </div>
  );
};

export default Header;