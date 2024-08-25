import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onResponse }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = JSON.parse(inputValue);
            const response = await axios.post('https://bajaj-5s6e.onrender.com/bfhl', data);
            onResponse(response.data);
            setError(null);
        } catch (err) {
            setError('Invalid JSON or network error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter JSON {"data": ["A","1","b"]}'
            />
            <button type="submit">Submit</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default InputForm;
