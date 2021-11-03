import React from "react";
import { Link } from "react-router-dom";

function ListNews(props) {

  const data = props.data;
  const listNews = data.map((newItem) =>
    <div className="row" key={newItem.src}>
      <Link to="/" className="news-wrap m-2">
        <img className="news-img mr-2" alt="img" src={newItem.img}></img>
        <div className="news-description mx-1">
          <div className="news-title my-1">
            {newItem.title}
          </div>
          <div className="news-summary my-1">
            {newItem.sumary}
          </div>
        </div>
      </Link>
      <div className="my-3 row block-separation separation-color"></div>
    </div>    
  );

  return (
    listNews
  );
}

export default ListNews;
