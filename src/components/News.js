import React from 'react';

const News = (props) => {

    return (
        
        <li className="news-item">
            <p>{props.title} </p>
            <p>Author: {props.author}</p> 
            <p>Score: {props.score}</p>
            <p hidden={!props.url}><a href={props.url} target="_blank">Read story</a></p>
        </li>
       
    )
}

export default News;
