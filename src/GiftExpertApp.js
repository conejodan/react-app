import React, { Component, useState } from 'react'
import AddCategory from './AddCategory';

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'One Piece'])
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(item => <li key={item}>{item}</li>)}
            </ol>
        </>
    )
}

export default GiftExpertApp;
