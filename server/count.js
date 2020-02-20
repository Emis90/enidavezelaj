const express = require('express');
const route = express()
const countapi = require('countapi-js');


route.get('/', async(req, res)=> {
  let num = await countapi.visits().then((result) => {
    return result
  });

  res.json(num)
})

module.exports = route
