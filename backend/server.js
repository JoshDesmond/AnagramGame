import json from './data.json' assert { type: 'json' };
import express from 'express';

const app = express();
const port = 31843;
// TODO support CORS

app.get('/', (req, res) => {
    res.send(json[0]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
