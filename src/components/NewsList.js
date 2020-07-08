import React from "react";
import News from "./News";

const NewsList = (props) => {

   const newsNodes = props.news.map(newsItem => {
       return(
           <News 
                title={newsItem.title} 
                url={newsItem.url} 
                score={newsItem.score} 
                key={newsItem.id}
                author={newsItem.by}  >
           </News>
       )
   })

    return (
        <div className="news-list">
            <ol>{newsNodes}</ol>
        </div>
    )
}


export default NewsList;