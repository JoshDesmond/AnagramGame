import json from './words.json' assert { type: 'json' };
import express from 'express';
import { Temporal } from '@js-temporal/polyfill';
import cors from 'cors';

var corsOptions = {
    origin: 'http://localhost:19006',
}

const app = express();
const port = 31843;

app.get('/', cors(corsOptions), (req, res) => {
    let index = calculateWordNumber(); 
    res.send(json[index]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// Date logic
const startDate = Temporal.PlainDate.from({year: 2022, month: 8, day: 3});

/**
 * Returns a word index number
 */
function calculateWordNumber() {
    const nowDate = Temporal.Now.plainDateISO();
    return nowDate.since(startDate, {largestUnit: "day"}).days;
}
