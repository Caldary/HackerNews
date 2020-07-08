import React from 'react';

const News = (props) => {
    return (
        <li>
            <p>{props.title} </p>
            <p>Author: {props.author}</p> 
            <p>Score: {props.score}</p>
        </li>
       
    )
}

export default News;
