import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component';
export const CardList = props => {
    return (
      <div className="cardList">
        {props.grpOfMonsters.map(monster=> (
          <Card key= {monster.id} monsters ={monster}/>
        ))
        }
      </div>
    )
}   

