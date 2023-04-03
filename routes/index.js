var express = require('express');
var router = express.Router();
var storage = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

route.get('/products',function(req,res,next){
  var json = {
    "id":storage.length+1,
    "name":req.name,
    "price":req.price,
    "mrp":req.mrp,
    "stock":req.stock,
    "isPublished":req.isPublished
  };
  storage.push(json);
  res.send(storage);
})

module.exports = router;
