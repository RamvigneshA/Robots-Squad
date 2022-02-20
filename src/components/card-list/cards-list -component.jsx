import React from 'react';
import './cards.style.css';
import { Solocard } from '../individualCard.component/solocard';
export const Cardlist = (props) => (
                                    <div className="cardlist"> {props.monsters.map(monster => (
                                       <Solocard rollNo={monster.id} mymonster={monster.name}/>))}
                                    </div>
                                   );