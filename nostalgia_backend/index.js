const fs = require('fs')
const express = require('express')
const app = express()
const cheerio = require("cheerio");
const axios = require("axios");
const SerpApi = require("google-search-results-nodejs");
var cors = require('cors');
require('dotenv').config()
const search = new SerpApi.GoogleSearch(process.env.API_KEY);
app.use(cors())
const {OpenAI} = require("openai");


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


const getJson = (searchQuery) => {
    return new Promise((resolve) => {
      search.json({
        q: searchQuery,
        engine: "google", 
        hl: "en", 
        gl: "us", 
        tbm: "isch"}, resolve);
    });
  };

const getResults = async (searchq) => {
    const imagesResults = [];
    const params = {
        q: searchq,
        engine: "google", 
        hl: "en", 
        gl: "us", 
        tbm: "isch"};
    for (let i = 0; i < 5; i++) {
      const json = await getJson(searchq);
      if (json.images_results) {
        imagesResults.push(...json.images_results);
        params.ijn ? (params.ijn += 1) : (params.ijn = 1);
      } else break;
    }
    return imagesResults;
};
app.post("/api", async (req, res) => {
    let data = await gpt('give 5 nostalgic events of messi without descriptions');
    data = data.split(/\n[0-9]\.[ ]?/);
    data = data.slice(1);
    for (let i = 0; i < data.length; i++) {
        let send = []
        // let imageslink = "https://www.google.com/search?q=" + data[i] + "&gl=us&tbm=isch&sourceid=chrome&ie=UTF-8";
        // axios(imageslink)
        //     .then(res => {
        //         const htmlData = res.data;
        //         console.log(htmlData)
        //         const $ = cheerio.load(htmlData);
        //         const images = []

        //         $('.kCmkOe', htmlData).each((index, element) => {
        //             const image = $(element).children('.DS1iW').attr('src')
        //             images.push({image})
        //         })
        //         console.log(images)
        //     }).catch(err => console.error(err))
        await getResults(data[i]).then((result) => {
            for (let j = 0; j < 5; j++) {
                send.push(result[j].original)
            }
        })
        res.send(send);
    }
    // res.json({"data": data});
})

async function gpt(text) {
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: text,
    max_tokens: 15,
    temperature: 0,
  });

  return completion.choices[0].text;
}

app.listen(4000, () => {console.log("Server started on port 4000")})
