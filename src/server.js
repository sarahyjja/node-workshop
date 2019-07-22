const http = require('http')
const server = http.createServer(handler)
const port = 3000

const message = 'Workshop'

function handler(request, response){
  response.writeHead(200, {'content-type': 'text/html'})
  response.write(message)
  response.end()
}

server.listen(3000, function(){
  console.log(`The server is listening on the port ${port}`)
})
