const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
    res.status(200).json({
        message: "Hello, this is your API response!",
        status: "success"
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

