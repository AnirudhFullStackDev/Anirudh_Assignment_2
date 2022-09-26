const express = require("express");
const app = express();
const filename = "/index.html";
const PORT = 8080;
const bodyParser = require("body-parser");
//const fetch=require('node-fetch');


// middleware funcitons...
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.json())   


// Get API

app.get('/Login/:username/:password', function(req, res) 
{
   let fullName=req.query['fullname'];
   let age=req.query['age'];
 
   let username = req.params['username']
    let password = req.params['password']

    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    const person={

      pathParameters:
      {
         userName:username,
         password:password
      },
      queryParameters:
      {
         fullName:fullName,
         age:age
      },
      fullUrl:fullUrl
   };
  // const personJson=JSON.stringify(person);
   console.log(person);
   res.json(person);
});



//POST API 


////////////////////////////////////////////////////////////////////////////////////////////////////////

//                        URL to paste in browser : http://localhost:8080/user                        //

////////////////////////////////////////////////////////////////////////////////////////////////////////



// GET request handler to display HTML page (index.html)
app.get("/user", (req, res) => {
  res.sendFile(__dirname + filename);
});

// POST request handler to display data sent from HTML form.
app.post("/users", (req, res) =>
 {
    console.log("\n Using HTML form");
    console.log("\n Post-Request data received at server side: ");
    console.log(req.body);
    const requestBody=req.body;
    const arrayResponse=Object.entries(requestBody);   // Converts json object to arrays with key-value pairs.
    console.log("\n Response being sent in the form of array: ");
    console.log(arrayResponse);
    res.json(arrayResponse);
});

// POST request handler to handle data sent using node-fetch package with custom data object in file 'index.html'.
app.post("/users/id", (req, res) => 
{
    console.log("\n Using node-fetch package")
    console.log("\n Post-Request data received at server side: ");
    console.log(req.body);
    const requestBody=req.body;
    const arrayResponse=Object.entries(requestBody);   // Converts json object to arrays with key-value pairs.
    console.log("\n Response being sent in the form of array: ");
    console.log(arrayResponse);
    res.json(arrayResponse);

});

app.listen(PORT, function(error){
  if (error) throw error
  console.log("Server running successfully on PORT : ", PORT)
})
