import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setsetInputValue] = useState('')
    const handleInputChange = (e) => {
        setsetInputValue(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCategories(categories => [...categories, inputValue]);
        setsetInputValue('');
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange} value={inputValue}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
