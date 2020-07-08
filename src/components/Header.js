import React from 'react';

const Header = (props) =>{
  return (
    <div>
      <select id="sort-selector" onChange={props.handleSelectFilter} defaultValue="default">
        <option disabled value="default">select filter...</option>
        <option key="score" value="score">score</option>
        <option key="title" value="title">title</option>
        <option key="time" value="time">time</option>
      </select>
    </div>
  );
};

export default Header;