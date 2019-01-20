var express = require('express');
var router = express.Router();
var request = require('request');
var microserviceBaseUrl = "http://nginx:1000";
/* GET home page. */
router.get('/call/service2',function(req, res, next){
  console.log("dhdhhdhdd");
  var endPoint = microserviceBaseUrl + '/service2/calling/service2';
  console.log(endPoint);
  request({
    url: endPoint,
    method: "GET",
  }, function (error, response, body) {
      console.log("inside function");

        res.contentType('application/json');
        res.send(body);
});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Service1' });
});


module.exports = router;
