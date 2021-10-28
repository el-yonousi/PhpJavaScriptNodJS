const http = require('http')
const routing = require('./routing')

const server = http.createServer(routing)

server.listen(3000, '127.0.0.1', () => {
    console.log('server runing..');
})