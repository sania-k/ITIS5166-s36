const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); 
const { expressjwt: exjwt } = require('express-jwt');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Allow requests from Angular's port
app.use(cors({
    origin: 'http://localhost:4200', // Allow requests from Angular's default port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const secretKey = 'My super secret key';

const login = {
    username: 'sania',
    password: 'sania'
};

app.use(express.static(path.join(__dirname, '../clean-energy/dist/clean-energy/browser')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../clean-energy/dist/clean-energy/browser/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log("Submitted", username, password);
    
    if (username === login.username && password === login.password) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.status(200).json({
            message: 'Login successful!',
            token: token
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials.' });
    }
});
