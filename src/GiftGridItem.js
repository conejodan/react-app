import React from 'react'

export const GiftGridItem = ({ id, title, image }) => {
    return (
        <div>
            <img src={image} alt={title}></img>
            <p>{id}</p>
        </div>
    )
}
