import React, { Component } from 'react'

export default class GiftExpertApp extends Component {
    

    render() {
        const categories = ['Dragon Ball', 'Naruto', 'One Piece'];
        return (
            <>
                <h2>GiftExpertApp</h2>
                <hr />
                <ol>
                    {categories.map(item => <li>{item}</li>)}
                </ol>
            </>
        )
    }
}
