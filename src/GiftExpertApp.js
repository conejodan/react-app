import React, { Component } from 'react'
import AddCategory from './AddCategory';

export default class GiftExpertApp extends Component {


    render() {
        const categories = ['Dragon Ball', 'Naruto', 'One Piece'];
        return (
            <>
                <h2>GiftExpertApp</h2>
                <AddCategory />
                <hr />
                <ol>
                    {categories.map(item => <li key={item}>{item}</li>)}
                </ol>
            </>
        )
    }
}
