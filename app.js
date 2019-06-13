const express = require("express");
const app = express();
		
app.get('/',(req,res)=>{

res.send("<h1>welcome Page</h1>");

});


app.listen(8080,()=>console.log("server run on 8080 port"));