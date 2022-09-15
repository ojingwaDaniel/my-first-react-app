import React from 'react'
import './card-list.style.css'
export const CardList = props => {
    console.log(props)
    return <div className='cardList'> {props.children}</div>;
}
