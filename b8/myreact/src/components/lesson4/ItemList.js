import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useTicketsContext } from '../../TicketsContext';


const ItemList = (props) => {

    const {ticket} = useTicketsContext();

    const { item, index } = props;
    console.log(index)
    return (
        <div className='item'>
            <div className='item_string'>
                {item}
                {index < 2 && (
                    <div className='badge_sold_out'>
                        Sold out
                    </div>
                )}
            </div>
            <div className='item_badge'>
                {index >= 2 && (
                    <div className='badge_circle'>
                        {ticket}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemList