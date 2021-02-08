import express from 'express';
import { db } from './dao/db';

const app = express();

const port = process.env.port || 3000;
app.set('port', port);

app.disable('x-powered-by');
app.use((req, res, n) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET POST');
    n();
});

app.use(express.json());

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('db pool closed');
    })
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
