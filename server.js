const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// This tells Node.js to serve all files inside the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// A "fake" route for verification (where your email link would go)
app.get('/verify', (req, res) => {
    res.send('<h1>Success!</h1><p>Your kurdHS account is now verified. You can return to the site and login.</p>');
});

app.listen(PORT, () => {
    console.log(`kurdHS server is running at http://localhost:${PORT}`);
});