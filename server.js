const express = require('express');

// Add the Port designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// GET Test Route

    // Default response for any other request (Not Found); user requests not supported by the app
    app.use((req, res) => {
        res.status(404).end();
    });

// Add function that starts the express.js serveron the port.
app.listen (PORT, () => {
    console.log( 'Server running on port ${PORT}');
});