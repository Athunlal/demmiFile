var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name : "Iphone 11",
      category : "Mobail",
      desciption : "This is a good phone",
      Image :"https://th.bing.com/th/id/OIP.1GBh8aKQIdmaOufEhN2ujgHaHa?w=166&h=180&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "Realme x2",
      category : "Mobail",
      desciption : "Primium Mide rage phone",
      Image : "https://th.bing.com/th/id/OIP.ujv2BNkI7tOpSI0STJn7PQHaHa?w=171&h=180&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name : "Redmi note 9pro",
      category :"mobail",
      desciption : "Mide rage phone",
      Image : "https://th.bing.com/th/id/OIP.zgEXJRCUcfgVFF0RwIwTdAHaHa?w=194&h=195&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name : "Realme 7i",
      category : "Mobail",
      desciption : "Budget rage",
      Image : "https://th.bing.com/th/id/OIP.NvdEROzeUy3fyeau8JSc3AHaHa?w=182&h=182&c=7&o=5&dpr=1.25&pid=1.7",
    }
    
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
