import React from 'react';

const options = [
    { label: 'Alphabets', value: 'alphabets' },
    { label: 'Numbers', value: 'numbers' },
    { label: 'Highest Lowercase Alphabet', value: 'highest_lowercase_alphabet' }
];

const MultiSelectDropdown = ({ onChange }) => {
    const handleSelectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        onChange(selectedOptions);
    };

    return (
        <select multiple onChange={handleSelectChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default MultiSelectDropdown;
