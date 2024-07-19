const express = require("express"); // user to create server 
const bodyParser = require("body-parser");
const port = 3000
const app = express()

app.use(bodyParser.json());
app.post('/' , function(req , res){
    console.log(req.body);
    res.send('Hello World')
})

app.listen(port , function(){
    console.log(`listning at  port ${port}`);
})
