import React from 'react'

const ItemList = (props) => {
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
                        5
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemList