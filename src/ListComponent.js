import React from 'react';
import ItemComponent from './ItemComponent';


export default function ListComponent(props){
    const items =props.items;
    return (
       
        <div>
        <h2>{ props.listName }</h2>
        <ul>
            <ItemComponent name={'Meu Item'}/>
            { items.map(item => <ItemComponent  name={item.name} />)} 
        </ul>
    </div>
    )
}