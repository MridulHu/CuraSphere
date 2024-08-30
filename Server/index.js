const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import cors

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'curasphere',
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        console.log('Connection config:', {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'curasphere',
            port: process.env.DB_PORT || 3306
        });
        return;
    }
    console.log('Connected to the MySQL database curasphere');
});

// Basic route to check server
app.get('/', (req, res) => {
    res.send('Welcome to Curasphere API!');
});

// Handle login route
app.post('/api/login', (req, res) => {
    const { name, email, password } = req.body;
    
    // Replace this with your actual query and authentication logic
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }

        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
