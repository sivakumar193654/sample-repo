

const http = require('http');

http.createServer(function(req,res){
  res.end("hello world siva")
}).listen(8080,()=>{
console.log('node server on 4000');
})