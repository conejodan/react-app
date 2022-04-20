import React from 'react';
import { useFetchGifs } from './hooks/useFetchGifs';
// import React, { useEffect, useState } from 'react';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
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