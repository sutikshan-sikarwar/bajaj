// src/routes/bfhlRoutes.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid input data format' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(item => item === item.toLowerCase()).sort().pop();

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.json(response);
});

router.get('/', (req, res) => {
    const response = {
        operation_code: 1234 // Replace this with your hardcoded operation code
    };

    res.status(200).json(response);
});

module.exports = router;
