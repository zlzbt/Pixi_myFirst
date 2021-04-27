const http = require('http');
http.createServer(function (request, response) {
    console.log('require come', request.url)

    response.end('123');
}).listen(8889)
app.use(cors({
    origin: function (ctx) {
        return 'http://localhost:8889';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
console.log('serve listening on 8889')