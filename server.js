const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const port = 3011;

let users = require('./users.json');

// Use cors middleware with specific origin
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/users', (req, res) => {
    const newUsers = users.map(user => {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image,
            age: user.age,
            city: user.address.city,
            state: user.address.state,
        };
    });
    res.json(newUsers);
});

app.listen(port, () => {
   console.log(`Server running on http://localhost:${port}`);
});
