const express = require('express');

const app = express();

app.get('/api/customers', (req,res) => {
    const customers = [
        {
            
        }
    ]
})

const port = 3000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));
