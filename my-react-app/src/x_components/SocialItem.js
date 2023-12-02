import React from "react";

function SocialItem(props) {

    return (
        <li className="list-group-item">
            <img src={props.p.img} className="img-thumbnail" alt={"icon of "+props.p.media}></img>
            <input type="checkbox" id={props.p.id}></input>
            <label htmlFor={props.p.id}>{props.p.media}</label>
        </li>
    )
}
export default SocialItem;