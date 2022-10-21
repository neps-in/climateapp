
var express = require('express');
var router = express.Router();
const axios = require('axios')

require('dotenv').config();

var request=require('request');

var apiconf = require('../apiconfig.json');

var apikey = process.env.APIKEY,
    apiBaseurl = 'http://api.weatherapi.com/v1/';

router.get('/current', function(req, res, next){
    //fallback or defaults
    var q = req.query.q || apiconf['current']['q'];

    apiurl = '';
    apiurl += apiBaseurl + apiconf['current']['api'];
    apiurl += '?key=' + apikey;
    apiurl += '&q=' + q ;
    apiurl += '&aqi=' + apiconf['current']['aqi'];

    console.log('API handler  : /current -------------> ',  apiurl );

    axios.get(apiurl)
    .then(response => {
        console.log(response.data);
        return res.json(response.data);
    })
})

router.get('/forecast', function(req, res, next){
    //fallback or defaults
    var q = req.query.q || apiconf['forecast']['q'];
    var days = req.query.days ? req.query.days : apiconf['forecast']['days'];
    
    apiurl = '';
    apiurl += apiBaseurl + apiconf['forecast']['api'];
    apiurl += '?key=' + apikey;
    apiurl += '&q=' + q ;
    apiurl += '&days=' + days;
    apiurl += '&aqi=' + apiconf['forecast']['aqi'];

    console.log('API handler  : /forecast -------------> ',  apiurl );

    axios.get(apiurl)
    .then(response => {
        console.log(response.data);
        return res.json(response.data);
    })
})
  
module.exports = router;