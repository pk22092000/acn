import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
    const subItems = props.subItems;
    const listItem = subItems.map((item) => 
        <li className="nav-item nav-sub-item" key={item.id}>
            <Link className="nav-sub-link nav-link" to={`/${item.id}`}>{item.name}</Link>
        </li>
    );


    return (
        <div>
            <li className="nav-item nav-item-news">
                <Link className="nav-link" to="/">
                    {props.name}
                </Link>
                <ul className="nav nav-sub">
                    {listItem}
                </ul>
            </li>
        </div>
    );
}

export default MenuItem;
