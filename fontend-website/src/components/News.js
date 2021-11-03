import React from "react";
import { Link } from "react-router-dom";

function News(props) {

  return (
    <Link to="/" className="news-wrap m-2">
      <img className="news-img mr-2" alt="img" src={props.img}></img>
      <div className="news-description">
        <div className="news-title my-1">
          {props.title}
        </div>
        <div className="news-summary my-1">
          {props.sumary}
        </div>
      </div>
    </Link>
  );
}

export default News;
