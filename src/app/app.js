const express = require('express');

const app = express();
const port = 3000;

app.get('/api/customers', (req,res) => {
    const customers = [
        {
            id: 1,
            firstname: 'Matthew',
            lastname: 'Doe',
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
        },
        {
            id: 3,
            firstname: 'Carolyn',
            lastname: 'Plant',
        }
    ]
    res.json(customers);
})

app.listen(port, () => console.log(`Server Started on Port ${port}`));
