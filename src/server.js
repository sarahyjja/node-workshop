const http = require('http')
const server = http.createServer()
const port = 3000

server.listen(3000, function(){
  console.log(`The server is listening on the port ${port}`)
})
