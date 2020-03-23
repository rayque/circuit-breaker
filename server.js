const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
    res.json({status: 'ok'});
});

app.listen(3001);