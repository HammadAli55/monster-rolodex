import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

export const CardList = props => {
    return(
        <div className="card-list">
            {
                props.monsters.map(monster=>(
                // key helps react which element has been updated, no need to rerender everything 
                    <Card key = {monster.id} monster={monster}/>
                ))
            }
        </div>
    )
}  