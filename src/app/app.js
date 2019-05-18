const express = require ('express')

const app = express();

// Runs either from environemnt set PORT variable 
// or defaults to 3000 if not existent
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on port  ${PORT}`));

//Defining a route for "/"
app.get('/', (request, response) => {
    response.send("<p> Hello Testing Route </p>");    
});

