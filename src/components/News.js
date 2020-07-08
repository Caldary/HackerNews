import React from 'react';

const News = (props) => {

    return (
        
        <li>
            <p>{props.title} </p>
            <p>Author: {props.author}</p> 
            <p>Score: {props.score}</p>
            <p hidden={!props.url}><a href={props.url}>Read story</a></p>
        </li>
       
    )
}

export default News;
