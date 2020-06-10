const Koa = require('koa');
const server = new Koa();
server.use ( ctx => {
    ctx.body = "Koa Server"
}).listen(3001)