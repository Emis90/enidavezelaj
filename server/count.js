const express = require('express');
const app = express()
const countapi = require('countapi-js');


app.get('/', (req, res)=> {
  countapi.visits().then((result) => {
    res.json(result.value)
});
})

module.exports = app
