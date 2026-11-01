const express = require('express');

const app = express();

// Route 1: Home page
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Express Server!');
});

// Route 2: About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Manoj',
        section: 'S-19'
    });
});

// Route 3: Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        dateTime: new Date()
    });
});

// Route 4: Handle unknown paths
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(3000, () => {
    console.log('Express server is running on port 3000');
});