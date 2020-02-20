const express = require('express');
const app = express()
const countapi = require('countapi-js');


app.get('/', (req, res)=> {
  countapi.visits().then((result) => {
    console.log(result)
    res.json(result)
});
})

module.exports = app
