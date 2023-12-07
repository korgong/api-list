const getProxy = (app, url, json) => {
    app.get(url, (_req, res) => {
        res.send(json);
    });
};
const postProxy = (app, url, json) => {
    app.post(url, (_req, res) => {
        res.json(json);
    });
};
function proxySetup(app) {
    getProxy(app, '/test', [1, 2, 3]);
    // postProxy(app, '/test', require('./src/mock/db').data);
}

function setupMiddlewares(middlewares, devServer) {
    if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
    }
    devServer.app.use((req, res, next) => {
        setTimeout(() => {
            next();
        }, 1000);
    });
    devServer.app.get('/api/list', (req, res) => {
        if (Number(req.query._page) === 1) {
            res.json(require('./src/mock/db').data.list.slice(0, 3));
        } else if (Number(req.query._page) === 2) {
            res.json(require('./src/mock/db').data.list.slice(3, 6));
        } else if (Number(req.query._page) === 3) {
            res.json(require('./src/mock/db').data.list.slice(6, 9));
        } else {
            res.json(require('./src/mock/db').data.list.slice(9, 11));
        }
    });
    proxySetup(devServer.app);
    return middlewares;
}

module.exports = { setupMiddlewares };
