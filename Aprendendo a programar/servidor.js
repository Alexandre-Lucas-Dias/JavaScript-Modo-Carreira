const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello Node!');
});
server.listen(3000);
alert('Servidor funcionando. Acesse: localhost:3000');