import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import MultiSelectDropdown from '../components/MultiSelectDropdown';
import ResponseDisplay from '../components/ResponseDisplay';

const HomePage = () => {
    const [responseData, setResponseData] = useState(null);
    const [filterOptions, setFilterOptions] = useState([]);

    const handleResponse = (data) => {
        setResponseData(data);
    };

    const handleFilterChange = (options) => {
        setFilterOptions(options);
    };

    return (
        <div>
            <h1>API input</h1>
            <InputForm onResponse={handleResponse} />
            {responseData && (
                <>
                    <MultiSelectDropdown onChange={handleFilterChange} />
                    <ResponseDisplay data={responseData} filters={filterOptions} />
                </>
            )}
        </div>
    );
};

export default HomePage;
