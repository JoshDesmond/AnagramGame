import json from './data.json' assert { type: 'json' };
import express from 'express';
import cors from 'cors';

var corsOptions = {
    origin: 'http://localhost:19006',
}

const app = express();
const port = 31843;

app.get('/', cors(corsOptions), (req, res) => {
    res.send(json[0]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
