const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();
const parser = new Parser();

app.use(cors());

app.get('/rss', async (req, res) => {
    let feed = await parser.parseURL('https://www.iltalehti.fi/rss/viihde.xml');
    res.json(feed.items);
});

app.listen(3000, () => {
    console.log('Serveri pystyssä portissa 3000');
});