var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name : "Iphone 11",
      category : "Mobail",
      description : "This is a good phone",
      Image :"https://th.bing.com/th/id/OIP.1GBh8aKQIdmaOufEhN2ujgHaHa?w=166&h=180&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "Realme x2",
      category : "Mobail",
      description : "Primium Mide rage phone",
      Image : "https://th.bing.com/th/id/OIP.ujv2BNkI7tOpSI0STJn7PQHaHa?w=171&h=180&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name : "Redmi note 9pro",
      category :"mobail",
      description : "Mide rage phone",
      Image : "https://th.bing.com/th/id/OIP.zgEXJRCUcfgVFF0RwIwTdAHaHa?w=194&h=195&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
      name : "Realme 7i",
      category : "Mobail",
      description : "Budget rage",
      Image : "https://th.bing.com/th/id/OIP.NvdEROzeUy3fyeau8JSc3AHaHa?w=182&h=182&c=7&o=5&dpr=1.25&pid=1.7",
    }
    
  ]
  res.render('admin/view-prodects',{admin : true, products})
});

module.exports = router;
