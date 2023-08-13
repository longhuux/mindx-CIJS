import React from 'react';
import { useState } from 'react';
import './SearchList.css';

const products = [
    {
        name: 'Product 1',
        price: '$10',
        description: 'Máy ảnh'
    },
    {
        name: 'Product 2',
        price: '$20',
        description: 'Tàu'
    },
    {
        name: 'Product 3',
        price: '$30',
        description: 'xe'
    },
    {
        name: 'Product 4',
        price: '$40',
        description: 'cơm'
    }]


const SearchList = () => {

    const [search, setSearch] = useState("");
    const filteredProduct = products.filter((item, index) => {
        return search === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='searchlist-container'>
            <div>
                <input
                    className='product-search'
                    placeholder='Search your item...'
                    onChange={(event) => setSearch(event.target.value)} />
            </div>
            {filteredProduct.length !== 0 ?
                filteredProduct.map((item, index) => {
                    return (
                        <>
                            <div className='product-item'>
                                <h4>{item.name} </h4>
                                <div>{item.price} </div>
                                <div>{item.description} </div>
                            </div>
                        </>
                    )
                }) : <div>Not found</div>}
        </div>
    );
};

export default SearchList;