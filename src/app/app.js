//Node Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nano = require('nano')('http://SinsOnTwitter:group68@localhost:5984');

//Express Variables
const app = express();
const port = 5000;

//CouchDB variables
const users = nano.db.use('site_users');

// Middleware 

//Cors configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes

app.get('/api/customers', (req,res) => {
    res.contentType('application/json');
    res.send([
        {id: 1, firstname: "Matthew", lastname: "Doe"},
        {id: 2, firstname: "John", lastname: "Doe"},
        {id: 3, firstname: "Carolyn", lastname: "Plant"}
    ]);
})

app.get('/api/users', (req,res) => {
    res.contentType('application/json');
    users.view('getUsers', 'get_User_Info',{include_docs: true}).then((body) => {
        body.rows.forEach((doc) => {
          //res.send(doc.value);
          console.log(doc.value);
        });
        res.send(body);
      });
    /*
    nano.db.get('site_users').then((body) => {
        res.send(body);
    });
    */
})


app.listen(port, () => console.log(`Server Started on Port ${port}`));
