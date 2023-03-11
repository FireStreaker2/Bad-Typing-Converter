require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.post("/endpoint", urlencodedParser, async function (req, res) {
  var query = req.body.query;

  const response = await openai.createCompletion({
    model: "text-curie-001",
    prompt: "Can you help clarify my friend's badly typed sentence? " + query,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["?"],
  });

  var clarified = response.data.choices[0].text;
  res.send(clarified);
})

app.listen(port, () => {
  console.log(`App is now available at localhost:${port}`)
})