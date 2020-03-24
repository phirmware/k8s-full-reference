const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const message = process.env.WELCOME_MESSAGE;
const mongoose = require('mongoose');
const db = process.env.DB_URI;

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

app.get('/db', (req, res) => {
    res.json({
        message: `This is the database uri - ${db}`
    });
});

app.get('/connect', (req, res) => {
    console.log('Here');
    connect(req, res);
})

async function connect(req, res) {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        res.json({
            message: `
            Connection to the database successfully established
            This is the db uri ${db}`
        });
    } catch (error) {
        res.json({
            error: error
        });
    }
}

exports.start = async () => {
    app.listen(port, () => console.log(`Listening on port , ${port}`));
}
