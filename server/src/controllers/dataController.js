const { extractData, findHighestLowercase } = require('../utils/helpers');
const { USER_ID, EMAIL, ROLL_NUMBER } = require('../config/constants');

const processData = (req, res) => {
    const { data } = req.body;
    const { numbers, alphabets } = extractData(data);
    const highestLowercase = findHighestLowercase(alphabets);

    res.status(200).json({
        is_success: true,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
};

const getOperationCode = (req, res) => {
    res.status(200).json({
        operation_code: 'OPERATION_CODE'
    });
};

module.exports = { processData, getOperationCode };
