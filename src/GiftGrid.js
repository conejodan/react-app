import React, { useEffect, useState } from 'react';
import { GiftGridItem } from './GiftGridItem';
import { getGifs } from './helpers/getGifs';

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map(item => {
                    return (
                        <GiftGridItem key={item.id} {...item}></GiftGridItem>
                    );
                })}
            </div>
        </>
    );
}