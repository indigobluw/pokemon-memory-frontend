const express = require("express")
var path = require('path')
const cors = require("cors");

const PORT = process.env.PORT || 3000

const app = express()
app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.static('public'))
app.use(cors());

app.get('/game', function(req, res){
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})
