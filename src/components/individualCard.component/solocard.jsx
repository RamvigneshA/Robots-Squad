import React from 'react';
import './solocard.style.css'
export const Solocard  = (props) => (
    <div className="cardContainer">
        <img alt="monsters" src={`https://robohash.org/${props.rollNo}&size=168*168`}/>
        <h1>{props.mymonster}</h1>
    </div>
);