const express = require('express');
const bodyParser = require('body-parser');
//const mongodb= require('mongodb');
const app = express();
const path = require('path');
const http = require('http');
// get apiJS
 const api = require("./server/routes/api");



//app.use('api')
//app.use(express.static(path.join(__dirname, 'dist')));



//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use('/api', api);


// ANgular DIST output folder
app.use(express.static(path.join(__dirname,'dist')));



app.get('*', function(req,res) {
   res.sendFile(path.join(__dirname,'src/index.html'));
});



//server port
//app.listen(process.env.PORT || 4200, function(){
  //  console.log("working server!");
//}) ;

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port,()=> console.log("server running!"));