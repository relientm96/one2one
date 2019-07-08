/*---Module Exports---*/

//Node Packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const nano = require("nano")("http://SinsOnTwitter:group68@localhost:5984");

//Express Variables
const app = express();
const port = process.env.PORT || 5000;

//CouchDB variables
const users = nano.db.use("site_users");

/*----Middleware----*/

//For Cors
app.use(cors());
//For Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*----Routes----*/

//Users Route
app.get("/api/users", (req, res) => {
  res.contentType("application/json");

  //If no query, return all users
  if (Object.keys(req.query).length === 0) {
    users
      .view("getUsers", "get_User_Info")
      .then(body => {
        res.send(body.rows);
      })
      .catch(function(error) {
        console.log("Promise rejected! Error was: " + error);
      });
  }

  //Query for user name indicated, we only return details about that user
  else if (Object.keys(req.query).indexOf("name") > -1) {
    name = Object.values(req.query)[Object.keys(req.query).indexOf("name")];

    //We found name in query and it has a value
    if (name) {
      users
        .view("getUsers", "get_User_Info", { key: name })
        .then(body => {
          res.send(body);
        })
        .catch(function(error) {
          console.log("Promise rejected! Error was: " + error);
        });
    }
  } else {
    res.sendStatus(404);
  }
});

//Get a Specific User's Profile Details
app.get("/api/users/", (req, res) => {});

app.listen(port, () => console.log(`Server Started on Port ${port}`));
