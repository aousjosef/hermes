const express = require("express");

const app = express();

const axios = require("axios");

app.use(express.static("public"));

app.set('view engine', 'ejs');

const url = "https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=general";

var fullJSON;

app.get("/", function(req, res) {
  axios.get(url).
  then(function(response)
  {
    console.log(response.status);
//JSON  logic here
fullJSON = response.data; //Send it as an object

res.render("ejsindex", {fullJSON});

//End of JSON LOGIC
   });
});

app.get("/technology", (req, res) => {

  axios.get("https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=technology").
  then(function(response)
  {
    console.log(response.status);
//JSON  logic here
fullJSON = response.data; //Send it as an object

res.render("ejsindex", {fullJSON});

//End of JSON LOGIC
   });

});


app.get("/sport", (req, res) => {

  axios.get("https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=sports").
  then(function(response)
  {
    console.log(response.status);
//JSON  logic here
fullJSON = response.data; //Send it as an object

res.render("ejsindex", {fullJSON});

//End of JSON LOGIC
   });

});



app.get("/science", (req, res) => {

  axios.get("https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=science").
  then(function(response)
  {
    console.log(response.status);
//JSON  logic here
fullJSON = response.data; //Send it as an object

res.render("ejsindex", {fullJSON});

//End of JSON LOGIC
   });

});


app.get("/business", (req, res) => {

  axios.get("https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=business").
  then(function(response)
  {
    console.log(response.status);
//JSON  logic here
fullJSON = response.data; //Send it as an object

res.render("ejsindex", {fullJSON});

//End of JSON LOGIC
   });

});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
})
