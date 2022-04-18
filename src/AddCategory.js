import React, { useState } from 'react'

const AddCategory = () => {
    const [inputValue, setsetInputValue] = useState('')
    const handleInputChange = (e) => {
        setsetInputValue(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setsetInputValue('');
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange} value={inputValue}></input>
        </form>
    )
}

export default AddCategory;
