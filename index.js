// import express and axios
import express from 'express';
import axios from "axios";
import bodyParser from "body-parser";
// create express app and port number
const app = express();
const port = 3000;
// use public folder for static fil
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index.ejs', {quote:"Welecome to Random motivation Quote Generator", author:""});  // Render index.ejs
});




//  



app.post("/getQuote", async (req, res) => {
    try {
        const category = req.body.category;
      const result = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
            'X-Api-Key': 'FCG5VZPIKTukK9/tLjcpEw==Cj6mKgpC4aBE9vY8'
          }
      });
      console.log(result.data);
        res.render("index.ejs", {
            quote: result.data[0].quote,
            author: result.data[0].author,
            
        });
    }catch (error) {
        console.log(error.message);
        res.status(500).send("Error fetching secret");
    }
  });











app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });