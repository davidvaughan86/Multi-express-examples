const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

const productController = require('./controllers/products');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static('public'));

app.use(logger);
// disabling for local development
// app.use(helmet());

app.get('/', (req, res) => {
    res.render('home', {
        locals: {
            message: "Welcome to Super Important Company, Inc.",
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }
    });
});

app.get('/products', productController.list);

app.get('/products/:id', productController.detail);

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
