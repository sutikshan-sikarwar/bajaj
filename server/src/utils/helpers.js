const extractData = (data) => {
    const numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
        }
    });

    return { numbers, alphabets };
};

const findHighestLowercase = (alphabets) => {
    const lowercase = alphabets.filter(char => char >= 'a' && char <= 'z');
    return lowercase.sort().pop() || null;
};

module.exports = { extractData, findHighestLowercase };
