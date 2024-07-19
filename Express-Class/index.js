// creating an http server 
const express = require("express");

const app = express();

function sumTilln(n){
     let temp = 0;
     for(let i = 0 ; i<= n ; i++){
        temp = temp + i;

     }
     return temp;
}
app.get("/" , function(req , res){
   
    const n = req.query.n;
    const sum = sumTilln(n);
    res.send(`hi there your result is ${sum}`);
})

app.listen(3000);