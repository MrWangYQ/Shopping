const fs = require('fs');
module.exports = function (req, res) {
    const userData = JSON.parse(fs.readFileSync('./data/classify/classify.json', 'utf-8'));
    
    res.end(JSON.stringify(userData));
};