var express = require('express');
var router = express.Router();
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
  const unsplash = new Unsplash({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    secret: process.env.UNSPLASH_SECRET,
    callbackUrl: process.env.UNSPLASH_CALLBACK_URL,
    timeout: 500
  });

  unsplash.photos.getRandomPhoto({ orientation: "landscape" })
  .then(toJson)
  .then(json => {
    res.json(json);
  });
  } catch (e) {}
  
  
});

module.exports = router;
