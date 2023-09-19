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


app.get("/:id", (req,res) => {

console.log(req.params.id);
let newscata = req.params.id;
let apiurl = "https://newsapi.org/v2/top-headlines?apiKey=958ad3b5b45b4c7e8c40d65aaf0c1c34&language=en&category=" + newscata;
axios.get(apiurl).
then(function(response){
  console.log(response.status);
  fullJSON = response.data;
  res.render("ejsindex", {fullJSON});
}
);
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
})
