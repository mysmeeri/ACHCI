//HUOM!!! tämä ei enää käytössä, poistettu live rss feed käytöstä

const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();
const parser = new Parser();

app.use(cors());

app.get('/rss', async (req, res) => {
    let feed = await parser.parseURL('https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100727362');
    res.json(feed.items);
});

app.listen(3000, () => {
    console.log('Serveri pystyssä portissa 3000');
});