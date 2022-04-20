import React, { useEffect, useState } from 'react';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getGifs = async () => {
        const apiKey = 'acTxFdQhQ8567StrJhP2WQvY6LO177vH';
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifts = data.map(({ id, title, images }) => {
            return {
                id,
                title,
                image: images?.downsized_medium.url
            }
        })
        console.log(gifts)
        setImages(gifts);
    }

    useEffect(() => {
        getGifs();
    }, []);

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