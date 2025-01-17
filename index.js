const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple endpoint
app.get('/', (req, res) => {
    res.send('Hello, AWS Amplify!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
