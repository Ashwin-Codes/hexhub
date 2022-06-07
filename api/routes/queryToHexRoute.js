const router = require('express').Router();

// Config file
let config = require('../config.json');

// Dependencies
const fetch = require('cross-fetch');
const { createApi } = require('unsplash-js');
const { extractColors } = require('extract-colors');

// Initialising unsplash api
const unsplash = createApi({
  accessKey: config.unsplash_api_key,
  fetch: fetch,
});

// Function getImages() returns image urls for provided term
async function getImages(query) {
  if (query === undefined) return [];
  const urls = [];
  const res = await unsplash.search.getPhotos({
    query,
    page: 1,
    perPage: 20,
  });

  Object.keys(res.response.results).forEach((i) => {
    urls.push(res.response.results[i].urls.small);
  });
  return urls;
}

// Function getColorPallete() returns extracted colors from provided imageUrl
async function getColorPallete(imgUrl) {
  const clrObj = { imgUrl: '', hex: [] };
  const colors = await extractColors(imgUrl);
  clrObj.imgUrl = imgUrl;
  colors.forEach((clr) => {
    clrObj.hex.push(clr.hex);
  });
  return clrObj;
}

// Function generateColorPallete() returns object with image url and their extracted hex
// Output = [{imgUrl : "url",hex:[#000000,#aaaaaa]}]
async function generateColorPallete(query) {
  const colorPallets = [];
  const urls = await getImages(query);

  for (let i = 0; i < urls.length; i++) {
    const pallete = await getColorPallete(urls[i]);
    if (pallete.hex.length > 3) {
      colorPallets.push(pallete);
    }
  }
  return colorPallets;
}

router.post('/queryToHex', async (req, res) => {
  const query = req.body.query;
  if (query === undefined) return;
  const hex = await generateColorPallete(query);
  res.send(hex);
});

module.exports = router;
