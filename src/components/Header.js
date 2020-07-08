import React from 'react';

const Header = (props) =>{
  return (
    <div>
      <h1>CodeClan Reddit2.0</h1>
      <select id="sort-selector" onChange={props.handleSelectFilter} defaultValue="default">
        <option disabled value="default">Sort</option>
        <option key="score" value="score">score</option>
        <option key="title" value="title">title</option>
        <option key="time" value="time">time</option>
      </select>
    </div>
  );
};

export default Header;