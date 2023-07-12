const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this before server.use(router)
server.use(
    jsonServer.rewriter({
        '/api/:resource/': '/:resource',
        '/api/:resource/:id/show': '/:resource/:id',
        '/api/:resource/page/:page': '/:resource?_page=:page',
    }),
);

server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});
