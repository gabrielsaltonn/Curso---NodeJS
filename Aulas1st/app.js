import http from 'http'

const server = http.createServer(function(req, res){
    res.end("Olá!")
}).listen(8080)

