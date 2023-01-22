const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const got = require('got');
const cheerio = require('cheerio');

dotenv.config();

// Express App
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.get('/api/webscrape/:word', (req, res) => {
  const { word } = req.params;

  // Pull HTML source code from signingsavvy
  got(`https://www.signingsavvy.com/search/${word}`).then(result => {
    // Scrape video url from HTML
    let $ = cheerio.load(result.body);
    let video = $("#video-1 source").attr('src');

    if (!video || video === null) {
      // If multiple results, pull first result
      const search_result = $(".search_results ul li:first-child a").attr('href');

      got(`https://www.signingsavvy.com/${search_result}`).then(result => {
        let $ = cheerio.load(result.body);
        let video = $("#video-1 source").attr('src');

        res.json({ 'video_url': video });
      }).catch(err => {
        console.log(err);
      });
    } else {
      res.json({ 'video_url': video });
    }

  }).catch(err => {
      console.log(err);
  });

})

app.get('/api/webscrape/', (req, res) => {
  res.json({ 'video_url': 'No word input' });
});

app.get('/', (req, res) => {
    res.status(200).send('Backend works');
});

// Listen
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
})