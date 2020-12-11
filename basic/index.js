const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.use(logger);
app.use(helmet());

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
