const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const message = process.env.WELCOME_MESSAGE;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello From Practice App - ' + message,
        statusCode: 200,
    });
});

app.get('/healthz', (req, res) => {
    res.json({
        message: 'ok'
    });
});

app.listen(port, () => console.log('Listening on port ', port));
