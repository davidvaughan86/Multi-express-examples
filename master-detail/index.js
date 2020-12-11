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

const products = require('./product-db.json');

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

app.get('/products', (req, res) => {
    res.render('products/list', {
        locals: {
            products
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }
    });
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    res.render('products/detail', {
        locals: {
            product
        },
        partials: {
            header: '/partials/header',
            footer: '/partials/footer'
        }        
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
