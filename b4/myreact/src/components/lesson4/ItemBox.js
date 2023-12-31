import React from 'react'
import Modal from './Modal';

const ItemBox = (props) => {
    const { item } = props;
    return (
        <div className='box_item'>
            <div className='image'>
                <img src={item.image} />
            </div>
            <div className='content'>
                <div className='province'>
                    <p>{item.province}</p>
                </div>
                <div className='time'>
                    <p>{item.time}</p>
                </div>
                <div className='description'>
                    <p>{item.description}</p>
                </div>
                <Modal />
            </div>
        </div>
    )
}

export default ItemBox