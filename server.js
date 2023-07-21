const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this middleware to add a delay to each request
server.use((req, res, next) => {
    setTimeout(next, 1000); // Adds a delay of 2000ms or 2 seconds to each request
});

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
