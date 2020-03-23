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

exports.start = async () => {
    try {
        console.log('This is the db uri ', db);
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(port, () => console.log(`
                Connection to the database successfully established
                Listening on port , ${port}`));
    } catch (error) {
        console.log(error);
    }
}
