const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/customers', (req,res) => {
    res.contentType('application/json');
    res.send([
        {id: 1, firstname: "Matthew", lastname: "Doe"},
        {id: 2, firstname: "John", lastname: "Doe"},
        {id: 3, firstname: "Carolyn", lastname: "Plant"}
    ]);
})

app.listen(port, () => console.log(`Server Started on Port ${port}`));
