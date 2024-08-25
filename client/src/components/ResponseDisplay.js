import React from 'react';

const ResponseDisplay = ({ data, filters }) => {
    const filteredData = {};

    filters.forEach(filter => {
        if (data[filter]) {
            filteredData[filter] = data[filter];
        }
    });

    return (
        <div>
            {Object.keys(filteredData).map(key => (
                <p key={key}>{key}: {filteredData[key].join(', ')}</p>
            ))}
        </div>
    );
};

export default ResponseDisplay;
