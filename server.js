const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/log', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const log = `[${new Date().toISOString()}] ${ip}\n`;
    fs.appendFileSync('visitors.txt', log);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Nelix Lookup backend is running.');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
