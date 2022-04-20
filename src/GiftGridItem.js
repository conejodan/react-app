import React from 'react'

export const GiftGridItem = ({ id, title, image }) => {
    return (
        <div className='card'>
            <img src={image} alt={title}></img>
            <p>{id} - {title}</p>
        </div>
    )
}
