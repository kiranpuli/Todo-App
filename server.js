const express = require('express'),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
path = require("path")
app = express(),
port = 5000;

//MIDDLEWARE
app.use(bodyParser.json())

const items = require("./routes/api/items")
app.use("/api/items",items)

//DB
mongoose.connect("mongodb://localhost/Todo",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})


app.get('/api/customers', (req, res) => {
  res.send("HI")
});

//SERVE STATIC ASSETS
if(process.env,NODE_ENV==="production"){
  //SET STATIC FOLDER
  app.use(express.static('client/build'))

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));