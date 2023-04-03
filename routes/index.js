var express = require('express');
var router = express.Router();
var storage = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.post('/products',function(req,res,next){
  // console.log(req.body);
  var json = {
    "id":storage.length+1,
    "name":req.boyd.name,
    "price":req.boyd.price,
    "mrp":req.boyd.mrp,
    "stock":req.boyd.stock,
    "isPublished":req.boyd.isPublished
  };
  storage.push(json);
  console.log(storage);
  res.send(201);
});

module.exports = router;
