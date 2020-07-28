// Importing express module
const express = require('express');

// Creating express module object
const app = express();

// Content to be displayed
const jsonObj = {
    name: "Navprayas",
    dob: "2000"
};

// Defining Routes 
app.get("/userDetails", (req, res) => {
    res.json(jsonObj,null,2);
   });

// Port environment variable
const port = process.env.port || 8080;

//Establish server connection
app.listen(port, () => {
 console.log("Server running on port 8080");
 //process.exit(1);
});