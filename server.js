const express = require('express');
const app = express();
const config = require('./config')

app.get('/healthcheck', (req, res) => {
    res.json({status: 'ok'});
});

const port = config.port;

app.listen(port, function () {
    console.log('Node server is running! Check the route bellow.');
    console.log(`http://localhost:${port}/healthcheck`);
});