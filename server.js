const mysql = require('mysql2');

const express = require('express');

// Add the Port designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect the app to the MYSQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '@$$2312oK',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// GET Test Route

// Return all the data in the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
   });

    // Default response for any other request (Not Found); user requests not supported by the app
    app.use((req, res) => {
        res.status(404).end();
    });

// Add function that starts the express.js server on the port.
app.listen (PORT, () => {
    console.log( 'Server running on port ${PORT}');
});