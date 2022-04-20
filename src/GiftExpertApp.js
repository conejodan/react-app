import React, { useState } from 'react'
import AddCategory from './AddCategory';
import { GiftGrid } from './GiftGrid';

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'One Piece'])
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(item => <GiftGrid key={item} category={item}></GiftGrid>)}
            </ol>
        </>
    )
}

export default GiftExpertApp;
